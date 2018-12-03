import { Component, OnInit } from '@angular/core';

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

  mode: String = 'editor';

  constructor() { }

  ngOnInit() {
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
