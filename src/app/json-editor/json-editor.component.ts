import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { remote } from 'electron';
import { readFileSync } from 'fs';
import { toast } from '@samuelberthe/angular2-materialize';
import * as $ from 'jquery';
import { Validator } from 'jsonschema';

declare var M: any;

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.css']
})
export class JsonEditorComponent implements AfterViewInit {

  originalSchema = {};
  schema = {
    type: 'object',
    properties: {}
  };

  model = {};
  errors = [];
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

      this.errors = [];

      let fileContent = readFileSync(this.filePath).toString();
      let obj = JSON.parse(fileContent);

      this.model = obj[this.serviceName];

      setTimeout(() => {
        this.validateJson();

        // This updates labels (if the field has a value)
        M.updateTextFields();
        // Trigger focus & blur so Materialize's validation styling is
        // applied. Do in reverse so scroll doesn't jump to bottom of
        // page
        $('input').each(function () {
          $(this).attr('data-length', $(this).val().length);
          M.validate_field($(this));
        });
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

    if (files && files.length === 1) {
      this.filePath = files[0];
      this.tryLoadJson();
    } else {
      toast({
        html: `<p>Please select a file</p>`
      });
    }
  }

  get formattedModel() {
    return JSON.stringify(this.model, null, ' ');
  }

  validateJson() {
    let validator = new Validator();
    let res = validator.validate(this.model, this.originalSchema);

    if (res.errors.length === 0) {
      this.errors = [];
    } else {
      // Only show toast if there are new errors
      if (this.errors.length === 0) {
        toast({
          html: `<p>JSON validation error${res.errors.length > 1 ? 's' : ''}</p>`,
          classes: 'red accent-2'
        });
      }

      this.errors = res.errors;
    }
  }

  setSchema(schema) {
    this.originalSchema = JSON.parse(JSON.stringify(schema));
    this.schema = JSON.parse(JSON.stringify(schema));
  }

}
