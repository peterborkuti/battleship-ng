import { Ship, VERTICAL, HORIZONTAL } from '../../src/app/autoplacement/ship';
import { Coord } from '../../src/app/autoplacement/coord';
describe('foundation', () => {
  it('should create', () => {
    expect((new Ship(0)).toString()).toBe('Ship{0,0,0,0}');
    expect((new Ship(1, 2, 3, 1)).toString()).toBe('Ship{1,2,3,1}');
    const ship = new Ship(1, 2, 3, 0);
    expect(ship.len).toBe(1);
    expect(ship.row).toBe(2);
    expect(ship.col).toBe(3);
    expect(ship.orientation).toBe(0);
  });
});

describe('getShipRectangle', () => {
  it('case 1', () => {
    expect(new Ship(1).getShipRectangle().toString()).toEqual('Rectangle{(0,0),(0,0)}');
  });

  it('case 2', () => {
    expect(new Ship(2).getShipRectangle().toString()).toEqual('Rectangle{(0,0),(0,1)}');
  });

  it('case 3', () => {
    expect(new Ship(2, 0, 0, VERTICAL).getShipRectangle().toString()).toEqual('Rectangle{(0,0),(1,0)}');
  });

  it('case 4', () => {
    expect(new Ship(4, 5, 7, VERTICAL).getShipRectangle().toString()).toEqual('Rectangle{(5,7),(8,7)}');
  });

  it('case 4', () => {
    expect(new Ship(4, 5, 7, HORIZONTAL).getShipRectangle().toString()).toEqual('Rectangle{(5,7),(5,10)}');
  });
});

describe('coords', () => {
  it('case 1', () => {
    const coords = (new Ship(1)).coords();
    expect(Coord.arrayStrictOrderEqual([new Coord(0, 0)], coords)).toBeTruthy();
  });
  it('case 2', () => {
    const coords = (new Ship(3, 4, 5, HORIZONTAL)).coords();
    expect(Coord.arrayStrictOrderEqual([new Coord(4, 5), new Coord(4, 6), new Coord(4, 7)], coords)).toBeTruthy();
    expect(Coord.arrayStrictOrderEqual([new Coord(4, 5), new Coord(4, 6), new Coord(7, 7)], coords)).toBeFalsy();
  });
  it('case 3', () => {
    const coords = (new Ship(3, 4, 5, VERTICAL)).coords();
    expect(Coord.arrayStrictOrderEqual([new Coord(4, 5), new Coord(5, 5), new Coord(6, 5)], coords)).toBeTruthy();
    expect(Coord.arrayStrictOrderEqual([new Coord(4, 5), new Coord(5, 5), new Coord(5, 5)], coords)).toBeFalsy();
  });
});

describe('isInMap', () => {
  it('horizontal', () => {
    let ship = new Ship(4, 7, 7, HORIZONTAL);
    expect(ship.isInMap(10)).toBeFalsy();
    ship = new Ship(4, 7, 7, HORIZONTAL);
    expect(ship.isInMap(10)).toBeFalsy();
    ship = new Ship(3, 9, 7, HORIZONTAL);
    expect(ship.isInMap(10)).toBeTruthy();
    ship = new Ship(3, 7, 9, VERTICAL);
    expect(ship.isInMap(10)).toBeTruthy();
  });
});

