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
    required: [
      'tasks'
    ],
    properties: {
      logs: {
        type: 'object',
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
        title: 'Upload Tasks',
        type: 'array',
        items: {
          type: 'object',
          title: 'Job Information',
          widget: 'ext-object',
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
              widget: 'ext-object',
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
              title: 'Path Configurations',
              widget: 'itemized-object',
              items: {
                type: 'object',
                required: [
                  'remote',
                  'local'
                ],
                properties: {
                  local: {
                    type: 'string',
                    widget: 'validated-string',
                    title: 'Local directory'
                  },
                  remote: {
                    type: 'string',
                    widget: 'validated-string',
                    title: 'Remote directory'
                  },
                  delete: {
                    type: 'boolean',
                    title: 'Delete after upload',
                    widget: 'materialize-checkbox',
                    default: false
                  },
                  trigger: {
                    type: 'string',
                    widget: 'validated-string',
                    title: 'Trigger'
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

  ngAfterViewInit() {
    this.jsonEditor.serviceName = 'upload-springcm';
    this.jsonEditor.setSchema(this.uploadSchema, {
      tasks: [],
      logs: {
        cloudwatch: {}
      }
    });
  }

}
