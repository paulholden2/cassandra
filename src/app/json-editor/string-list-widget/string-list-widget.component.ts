import { Component } from '@angular/core';
import { ArrayWidget } from 'ngx-schema-form';

@Component({
  selector: 'app-string-list-widget',
  templateUrl: './string-list-widget.component.html',
  styleUrls: ['./string-list-widget.component.css']
})
export class StringListWidgetComponent extends ArrayWidget { }
