import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterializeCheckboxWidgetComponent } from './materialize-checkbox-widget.component';

describe('MaterializeCheckboxWidgetComponent', () => {
  let component: MaterializeCheckboxWidgetComponent;
  let fixture: ComponentFixture<MaterializeCheckboxWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterializeCheckboxWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterializeCheckboxWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
