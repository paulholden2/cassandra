import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-springcm-import',
  templateUrl: './springcm-import.component.html',
  styleUrls: ['./springcm-import.component.css']
})
export class SpringcmImportComponent implements OnInit {
  importSchema = {
    type: 'object',
    properties: {
      tasks: {
        widget: 'springcm-import-tasks',
        description: 'Task Information',
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

  importModel = {
    tasks: []
  };

  mode: String = 'editor';

  constructor() { }

  ngOnInit() {
  }

  logit() {
    console.log(this.importModel.tasks.length)
  }

  get formattedModel() {
    return JSON.stringify(this.importModel, null, ' ');
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
