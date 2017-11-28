import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoplacementComponent } from './autoplacement.component';

describe('AutoplacementComponent', () => {
  let component: AutoplacementComponent;
  let fixture: ComponentFixture<AutoplacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoplacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
