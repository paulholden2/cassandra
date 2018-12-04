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
        title: 'Import Tasks',
        type: 'array',
        items: {
          type: 'object',
          title: 'Job Information',
          required: [
            'job',
            'customer'
          ],
          properties: {
            job: {
              type: 'string',
              widget: 'validated-string',
              title: 'Job ID'
            },
            customer: {
              type: 'string',
              widget: 'validated-string',
              title: 'Customer ID'
            },
            auth: {
              type: 'object',
              title: 'SpringCM Authentication',
              required: [
                'clientId',
                'clientSecret',
                'dataCenter'
              ],
              properties: {
                clientId: {
                  type: 'string',
                  widget: 'validated-string',
                  title: 'Client ID'
                },
                clientSecret: {
                  type: 'string',
                  widget: 'validated-string',
                  title: 'Client Secret'
                },
                dataCenter: {
                  type: 'string',
                  widget: 'validated-string',
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
