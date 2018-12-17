import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonEditorComponent } from '../../../json-editor/json-editor.component';

@Component({
  selector: 'app-springcm-import-file',
  templateUrl: './springcm-import-file.component.html',
  styleUrls: ['./springcm-import-file.component.css']
})
export class SpringcmImportFileComponent implements OnInit {
  @ViewChild(JsonEditorComponent) jsonEditor: JsonEditorComponent;

  importSchema = {
    type: 'object',
    required: [
      'tasks',
      'logs'
    ],
    properties: {
      logs: {
        type: 'object',
        required: [
          'cloudwatch'
        ],
        properties: {
          cloudwatch: {
            type: 'object',
            widget: 'ext-object',
            title: 'CloudWatch Logs',
            required: [
              'logGroupName',
              'logStreamName',
              'awsAccessKeyId',
              'awsSecretKey',
              'awsRegion'
            ],
            properties: {
              logGroupName: {
                type: 'string',
                title: 'Log Group Name',
                widget: 'validated-string'
              },
              logStreamName: {
                type: 'string',
                title: 'Log Stream Name',
                widget: 'validated-string'
              },
              awsAccessKeyId: {
                type: 'string',
                title: 'Access Key ID',
                widget: 'validated-string'
              },
              awsSecretKey: {
                type: 'string',
                title: 'Secret Access Key',
                widget: 'validated-string'
              },
              awsRegion: {
                type: 'string',
                title: 'AWS Region',
                widget: 'validated-string'
              }
            }
          }
        }
      },
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
          widget: 'ext-object',
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
              widget: 'ext-object',
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
              title: 'Path Configurations',
              widget: 'itemized-object',
              items: {
                type: 'object',
                required: [
                  'remote',
                  'local',
                  'recurse',
                  'filter'
                ],
                properties: {
                  remote: {
                    type: 'string',
                    widget: 'validated-string',
                    title: 'Remote directory'
                  },
                  local: {
                    type: 'string',
                    widget: 'validated-string',
                    title: 'Local directory'
                  },
                  wastebin: {
                    type: 'string',
                    widget: 'validated-string',
                    title: 'Wastebin',
                    description: 'Files are moved here after download'
                  },
                  recurse: {
                    type: 'boolean',
                    title: 'Check subdirectories',
                    widget: 'materialize-checkbox',
                    default: false
                  },
                  filter: {
                    type: 'object',
                    properties: {
                      in: {
                        type: 'array',
                        widget: 'string-list',
                        title: 'Include patterns',
                        items: {
                          type: 'string',
                          widget: 'validated-string',
                          required: true
                        }
                      },
                      out: {
                        type: 'array',
                        widget: 'string-list',
                        title: 'Exclude patterns',
                        items: {
                          type: 'string',
                          widget: 'validated-string',
                          required: true
                        }
                      }
                    }
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

  ngOnInit() {
    this.jsonEditor.serviceName = 'import-springcm';
    this.jsonEditor.setSchema(this.importSchema, {
      logs: {
        cloudwatch: {}
      },
      tasks: []
    });
  }
}
