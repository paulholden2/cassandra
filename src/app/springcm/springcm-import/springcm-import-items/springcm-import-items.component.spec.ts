import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringcmImportItemsComponent } from './springcm-import-items.component';

describe('SpringcmImportItemsComponent', () => {
  let component: SpringcmImportItemsComponent;
  let fixture: ComponentFixture<SpringcmImportItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringcmImportItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringcmImportItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
