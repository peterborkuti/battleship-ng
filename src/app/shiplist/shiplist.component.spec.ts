import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiplistComponent } from './shiplist.component';

describe('ShiplistComponent', () => {
  let component: ShiplistComponent;
  let fixture: ComponentFixture<ShiplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
