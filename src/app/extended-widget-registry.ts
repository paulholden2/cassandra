import { DefaultWidgetRegistry } from 'ngx-schema-form';
import { SpringcmImportTasksWidgetComponent } from './springcm/springcm-import/springcm-import-tasks-widget/springcm-import-tasks-widget.component';

export class ExtendedWidgetRegistry extends DefaultWidgetRegistry {
  constructor() {
    super();

    this.register('springcm-import-tasks', SpringcmImportTasksWidgetComponent);
  }
}
