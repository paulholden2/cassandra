import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringcmImportComponent } from './springcm-import.component';

describe('SpringcmImportComponent', () => {
  let component: SpringcmImportComponent;
  let fixture: ComponentFixture<SpringcmImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringcmImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringcmImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
