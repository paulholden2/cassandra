import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { JsonEditorComponent } from '../../../json-editor/json-editor.component';

@Component({
  selector: 'app-springcm-upload-file',
  templateUrl: './springcm-upload-file.component.html',
  styleUrls: ['./springcm-upload-file.component.css']
})
export class SpringcmUploadFileComponent implements AfterViewInit {
  @ViewChild(JsonEditorComponent) jsonEditor: JsonEditorComponent;

  uploadSchema = {
    type: 'object',
    properties: {}
  };

  constructor() { }

  ngAfterViewInit() {
    this.jsonEditor.schema = this.uploadSchema;
  }

}
