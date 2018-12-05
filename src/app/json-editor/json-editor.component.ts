import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { remote } from 'electron';
import { readFileSync } from 'fs';
import { toast } from '@samuelberthe/angular2-materialize';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.css']
})
export class JsonEditorComponent implements OnInit {
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
      if (params.hasOwnProperty('path')) {
        this.filePath = decodeURIComponent(params['path']);
        this.tryLoadJson();
      }
    });
  }

  ngOnInit() {
  }

  hasOpenedFile() {
    return this.filePath !== null;
  }

  tryLoadJson() {
    try {
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
    this.mode = 'json'
  }

}
