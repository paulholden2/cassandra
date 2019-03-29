import { Component } from '@angular/core';
import { ArrayWidget } from 'ngx-schema-form';

declare var M: any;

@Component({
  selector: 'app-itemized-object-widget',
  templateUrl: './itemized-object-widget.component.html',
  styleUrls: ['./itemized-object-widget.component.css']
})
export class ItemizedObjectWidgetComponent extends ArrayWidget {
  copyItem(item) {
    let newItem = this.formProperty.addItem();
    newItem.setValue(JSON.parse(JSON.stringify(item.value)), false);
    setTimeout(() => {
      M.updateTextFields();
    }, 100);
  }
}
