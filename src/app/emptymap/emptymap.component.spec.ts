import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptymapComponent } from './emptymap.component';

describe('EmptymapComponent', () => {
  let component: EmptymapComponent;
  let fixture: ComponentFixture<EmptymapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptymapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptymapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
