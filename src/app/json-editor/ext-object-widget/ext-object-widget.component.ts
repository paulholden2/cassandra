import { Component } from '@angular/core';
import { ObjectWidget } from 'ngx-schema-form';

@Component({
  selector: 'app-ext-object-widget',
  templateUrl: './ext-object-widget.component.html',
  styleUrls: ['./ext-object-widget.component.css']
})
export class ExtObjectWidgetComponent extends ObjectWidget { }
