import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringcmUploadFileComponent } from './springcm-upload-file.component';

describe('SpringcmUploadFileComponent', () => {
  let component: SpringcmUploadFileComponent;
  let fixture: ComponentFixture<SpringcmUploadFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringcmUploadFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringcmUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
