import { DefaultWidgetRegistry } from 'ngx-schema-form';
import { SpringcmImportTasksWidgetComponent } from './springcm/springcm-import/springcm-import-tasks-widget/springcm-import-tasks-widget.component';
import { ValidatedStringWidgetComponent } from './json-editor/validated-string-widget/validated-string-widget.component';
import { ExtObjectWidgetComponent } from './json-editor/ext-object-widget/ext-object-widget.component';

export class ExtendedWidgetRegistry extends DefaultWidgetRegistry {
  constructor() {
    super();

    this.register('validated-string', ValidatedStringWidgetComponent);
    this.register('springcm-import-tasks', SpringcmImportTasksWidgetComponent);
    this.register('ext-object', ExtObjectWidgetComponent);
  }
}
