import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemizedObjectWidgetComponent } from './itemized-object-widget.component';

describe('ItemizedObjectWidgetComponent', () => {
  let component: ItemizedObjectWidgetComponent;
  let fixture: ComponentFixture<ItemizedObjectWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemizedObjectWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemizedObjectWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
