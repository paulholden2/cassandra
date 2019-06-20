import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesforceDeliveryComponent } from './salesforce-delivery.component';

describe('SalesforceDeliveryComponent', () => {
  let component: SalesforceDeliveryComponent;
  let fixture: ComponentFixture<SalesforceDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesforceDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesforceDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
