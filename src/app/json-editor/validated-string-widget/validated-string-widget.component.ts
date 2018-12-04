import { Component } from '@angular/core';
import { StringWidget} from 'ngx-schema-form';

@Component({
  selector: 'app-validated-string-widget',
  templateUrl: './validated-string-widget.component.html',
  styleUrls: ['./validated-string-widget.component.css']
})
export class ValidatedStringWidgetComponent extends StringWidget { }
