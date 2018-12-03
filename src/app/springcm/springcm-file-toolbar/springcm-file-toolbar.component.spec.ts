import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringcmFileToolbarComponent } from './springcm-file-toolbar.component';

describe('SpringcmFileToolbarComponent', () => {
  let component: SpringcmFileToolbarComponent;
  let fixture: ComponentFixture<SpringcmFileToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringcmFileToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringcmFileToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
