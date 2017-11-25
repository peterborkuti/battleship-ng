import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientationchooserComponent } from './orientationchooser.component';

describe('OrientationchooserComponent', () => {
  let component: OrientationchooserComponent;
  let fixture: ComponentFixture<OrientationchooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrientationchooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientationchooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
