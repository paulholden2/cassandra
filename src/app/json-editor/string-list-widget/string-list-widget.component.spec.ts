import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringListWidgetComponent } from './string-list-widget.component';

describe('StringListWidgetComponent', () => {
  let component: StringListWidgetComponent;
  let fixture: ComponentFixture<StringListWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringListWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringListWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
