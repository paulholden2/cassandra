import { Component, OnInit } from '@angular/core';
import { SalesforceService } from '../../salesforce.service';

@Component({
  selector: 'app-salesforce-delivery',
  templateUrl: './salesforce-delivery.component.html',
  styleUrls: ['./salesforce-delivery.component.css']
})
export class SalesforceDeliveryComponent implements OnInit {

  constructor(private salesforceService: SalesforceService) { }

  ngOnInit() {
  }

}
