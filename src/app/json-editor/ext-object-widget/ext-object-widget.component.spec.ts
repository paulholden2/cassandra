import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtObjectWidgetComponent } from './ext-object.component';

describe('ExtObjectComponent', () => {
  let component: ExtObjectWidgetComponent;
  let fixture: ComponentFixture<ExtObjectWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtObjectWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
