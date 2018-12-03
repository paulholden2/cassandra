import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringcmImportFileComponent } from './springcm-import-file.component';

describe('SpringcmImportFileComponent', () => {
  let component: SpringcmImportFileComponent;
  let fixture: ComponentFixture<SpringcmImportFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringcmImportFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringcmImportFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
