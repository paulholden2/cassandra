import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { remote } from 'electron';
import { readFileSync } from 'fs';
import { toast } from '@samuelberthe/angular2-materialize';
import { Validator } from 'jsonschema';

declare var M: any;

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.css']
})
export class JsonEditorComponent implements AfterViewInit {
  schema = {
    type: 'object',
    properties: {}
  };

  model = {};
  filePath = null;
  hasChanges: Boolean = false;
  // Which service we're modifying config for, e.g. import-springcm
  serviceName = null;

  mode: String = 'editor';

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.hasOwnProperty('path') && params.hasOwnProperty('service')) {
        this.filePath = decodeURIComponent(params['path']);
        this.serviceName = decodeURIComponent(params['service']);
      }
    });
  }

  ngAfterViewInit() {
    // Try loading JSON (if file was passed in via params)
    // shortly after view is init, so 2 way data binding with
    // schema form works.
    setTimeout(() => {
      this.tryLoadJson();
    }, 200);
  }

  hasOpenedFile() {
    return this.filePath !== null;
  }

  tryLoadJson() {
    try {
      if (!this.filePath) {
        return;
      }

      let fileContent = readFileSync(this.filePath).toString();
      let obj = JSON.parse(fileContent);
      this.model = obj[this.serviceName];
      console.log(this.model);
      setTimeout(() => {
        M.updateTextFields();
      }, 100);
    } catch (e) {
      console.error(e);
      this.closeFile();
      toast({
        html: `<p>Error loading JSON</p>`,
        classes: 'red accent-2'
      });
    }
  }

  closeFile() {
    this.filePath = null;
  }

  chooseFile() {
    var files = remote.dialog.showOpenDialog({
      properties: [ 'openFile' ]
    });

    if (files !== null && files.length === 1) {
      this.filePath = files[0];
      this.tryLoadJson();
    } else {
      // TODO: Error popover
    }
  }

  get formattedModel() {
    return JSON.stringify(this.model, null, ' ');
  }

  editorMode() {
    return this.mode === 'editor';
  }

  jsonMode() {
    return this.mode === 'json';
  }

  setEditorMode() {
    this.mode = 'editor'
  }

  setJsonMode() {
    var validator = new Validator();

    var res = validator.validate(this.model, this.schema);

    console.log(res);

    if (res.errors.length === 0) {
      this.mode = 'json'
    } else {
      this.mode = 'editor';
      toast({
        html: `<p>JSON validation error${res.errors.length > 1 ? 's' : ''}</p>`,
        classes: 'red accent-2'
      });
    }
  }

}
