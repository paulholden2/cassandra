import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringcmUploadItemsComponent } from './springcm-upload-items.component';

describe('SpringcmUploadItemsComponent', () => {
  let component: SpringcmUploadItemsComponent;
  let fixture: ComponentFixture<SpringcmUploadItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringcmUploadItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringcmUploadItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
