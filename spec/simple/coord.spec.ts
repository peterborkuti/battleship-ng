import { Coord } from '../../src/app/autoplacement/coord';

describe('Coord', () => {
  it('should create', () => {
    expect(new Coord(0, 0)).toBeTruthy();
  });

  it('should stringify', () => {
    expect(new Coord(5, 8).toString()).toEqual('(5,8)');
  });
});
