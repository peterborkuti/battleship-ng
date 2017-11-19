import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemymapComponent } from './enemymap.component';

describe('EnemymapComponent', () => {
  let component: EnemymapComponent;
  let fixture: ComponentFixture<EnemymapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnemymapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemymapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
