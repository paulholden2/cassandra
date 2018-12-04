import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatedStringWidgetComponent } from './validated-string-widget.component';

describe('ValidatedStringWidgetComponent', () => {
  let component: ValidatedStringWidgetComponent;
  let fixture: ComponentFixture<ValidatedStringWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatedStringWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatedStringWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
