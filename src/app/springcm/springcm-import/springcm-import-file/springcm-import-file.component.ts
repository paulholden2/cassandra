import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { JsonEditorComponent } from '../../../json-editor/json-editor.component';

@Component({
  selector: 'app-springcm-import-file',
  templateUrl: './springcm-import-file.component.html',
  styleUrls: ['./springcm-import-file.component.css']
})
export class SpringcmImportFileComponent implements AfterViewInit {
  @ViewChild(JsonEditorComponent) jsonEditor: JsonEditorComponent;

  importSchema = {
    type: 'object',
    properties: {
      tasks: {
        widget: 'springcm-import-tasks',
        description: 'Import Tasks',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            job: {
              type: 'string',
              title: 'Job ID'
            },
            customer: {
              type: 'string',
              title: 'Customer ID'
            },
            auth: {
              type: 'object',
              description: 'SpringCM Authentication',
              properties: {
                clientId: {
                  type: 'string',
                  title: 'Client ID'
                },
                clientSecret: {
                  type: 'string',
                  title: 'Client Secret'
                },
                dataCenter: {
                  type: 'string',
                  title: 'Data Center'
                }
              }
            },
            paths: {
              type: 'array',
              description: 'Path Configurations',
              items: {
                type: 'object',
                properties: {
                  remote: {
                    type: 'string',
                    title: 'Remote directory'
                  },
                  local: {
                    type: 'string',
                    title: 'Local directory'
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  constructor() { }

  ngAfterViewInit() {
    this.jsonEditor.schema = this.importSchema;
  }
}
