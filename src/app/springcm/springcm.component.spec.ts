import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringcmComponent } from './springcm.component';

describe('SpringcmComponent', () => {
  let component: SpringcmComponent;
  let fixture: ComponentFixture<SpringcmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringcmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
