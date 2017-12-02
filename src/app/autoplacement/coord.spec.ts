import { TestBed } from '@angular/core/testing';

import { Coord } from './coord';

describe('Coord', () => {
  it('should create', () => {
    expect(new Coord(0, 0)).toBeTruthy();
  });

  it('should stringify', () => {
    expect(new Coord(5, 8)).toBe('(0,0)');
  });
});
