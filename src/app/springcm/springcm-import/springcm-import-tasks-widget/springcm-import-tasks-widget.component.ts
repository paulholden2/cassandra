import { Component } from '@angular/core';
import { ArrayWidget } from 'ngx-schema-form';

declare var M: any;

@Component({
  selector: 'app-springcm-import-tasks-widget',
  templateUrl: './springcm-import-tasks-widget.component.html',
  styleUrls: ['./springcm-import-tasks-widget.component.scss']
})
export class SpringcmImportTasksWidgetComponent extends ArrayWidget {
  copyItem(item) {
    let newItem = this.formProperty.addItem();
    newItem.setValue(JSON.parse(JSON.stringify(item.value)), false);
    setTimeout(() => {
      M.updateTextFields();
    }, 100);
  }
}
