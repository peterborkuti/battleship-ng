import { Coord } from '../../src/app/autoplacement/coord';

describe('Coord', () => {
  it('should create', () => {
    expect(new Coord(0, 0)).toBeTruthy();
  });

  it('should stringify', () => {
    expect(new Coord(5, 8).toString()).toEqual('(5,8)');
  });

  it('should compare arrays', () => {
    const coords1: Coord[] = [new Coord(0, 0), new Coord(1, 3), new Coord(4, 6)];
    const coords2: Coord[] = [new Coord(0, 1), new Coord(1, 3), new Coord(4, 6)];
    const coords3: Coord[] = [new Coord(0, 0), new Coord(1, 3), new Coord(4, 6)];

    expect(Coord.arrayStrictOrderEqual(coords1, coords3)).toBeTruthy();
    expect(Coord.arrayStrictOrderEqual(coords1, coords2)).toBeFalsy();
  });

  it('should check if array contains coord', () => {
    const coords: Coord[] = [new Coord(0, 0), new Coord(1, 3), new Coord(4, 6)];
    const coord1: Coord = new Coord(1, 3);
    const coord2: Coord = new Coord(7, 4);

    expect(coord2.isAmongCoords(coords)).toBeFalsy();
    expect(coord1.isAmongCoords(coords)).toBeTruthy();
  });

});
