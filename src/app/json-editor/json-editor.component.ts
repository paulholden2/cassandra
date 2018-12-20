import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { remote } from 'electron';
import { writeFileSync, readFileSync } from 'fs';
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
  fullConfig = {};

  mode: String = 'editor';

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.hasOwnProperty('path') && params.hasOwnProperty('service')) {
        this.filePath = decodeURIComponent(params['path']);
        this.serviceName = decodeURIComponent(params['service']);
      }
    });
  }

  ngOnInit() {
    this.validateJson();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.tryLoadJson();
      this.updateFieldValidation();
    }, 100);

    $(document).on('change', 'input', () => {
      this.validateJson();
      this.updateFieldValidation();
    }).on('click', '.btn', () => {
      this.validateJson();
      this.updateFieldValidation();
    });
  }

  hasOpenedFile() {
    return this.filePath !== null;
  }

  updateFieldValidation() {
    $('input').each(function () {
      $(this).attr('data-length', $(this).val().length);
      M.validate_field($(this));
    });
  }

  tryLoadJson() {
    try {
      if (!this.filePath) {
        return;
      }

      this.errors = [];

      let fileContent = readFileSync(this.filePath).toString();
      let obj = JSON.parse(fileContent);

      this.fullConfig = obj;
      this.model = obj[this.serviceName];

      setTimeout(() => {
        this.validateJson();

        // This updates labels (if the field has a value)
        M.updateTextFields();
        this.updateFieldValidation();
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
      this.errors = res.errors;
    }
  }

  setSchema(schema, defaultModel) {
    this.originalSchema = JSON.parse(JSON.stringify(schema));
    this.schema = JSON.parse(JSON.stringify(schema));
    Object.assign(this.model, defaultModel);
  }

  saveAs() {
    var savePath = remote.dialog.showSaveDialog({});

    this.fullConfig[this.serviceName] = this.model;

    writeFileSync(savePath, JSON.stringify(this.fullConfig, null, '  '));
  }

}
