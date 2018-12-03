import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringcmImportTasksWidgetComponent } from './springcm-import-tasks-widget.component';

describe('SpringcmImportTasksWidgetComponent', () => {
  let component: SpringcmImportTasksWidgetComponent;
  let fixture: ComponentFixture<SpringcmImportTasksWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringcmImportTasksWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringcmImportTasksWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
