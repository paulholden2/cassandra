import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringcmUploadComponent } from './springcm-upload.component';

describe('SpringcmUploadComponent', () => {
  let component: SpringcmUploadComponent;
  let fixture: ComponentFixture<SpringcmUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringcmUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringcmUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
