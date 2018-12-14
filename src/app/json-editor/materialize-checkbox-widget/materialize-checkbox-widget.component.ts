import { Component } from '@angular/core';
import { CheckboxWidget } from 'ngx-schema-form';

@Component({
  selector: 'app-materialize-checkbox-widget',
  templateUrl: './materialize-checkbox-widget.component.html',
  styleUrls: ['./materialize-checkbox-widget.component.css']
})
export class MaterializeCheckboxWidgetComponent extends CheckboxWidget {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
