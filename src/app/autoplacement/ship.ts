import { Rectangle } from './rectangle';
import { Coord } from './coord';
import { ShipState, HORIZONTAL, VERTICAL } from './shipstate';

export class Ship {
  constructor(
    public len: number,
    public row: number = 0,
    public col: number = 0,
    public orientation: number = HORIZONTAL) {}

  setState(state: ShipState) {
    this.row = state.coord.row;
    this.col = state.coord.col;
    this.orientation = state.orientation;
  }

  setCoord(coord: Coord) {
    this.setState(new ShipState(coord, this.orientation));
  }

  toString() {
    return 'Ship{' + [this.len, this.row, this.col, this.orientation].join(',') + '}';
  }

  isInMap(rows: number = 10, cols: number = rows): boolean {
    if (this.orientation === VERTICAL) {
      return this.row + this.len <= rows;
    }

    return this.col + this.len <= cols;
  }

  isNotOverlappedWith(ship: Ship): boolean {
    const shipCoords = ship.coords();

    const overlapped =
      this.coords().some(function(c) { return c.isAmongCoords(shipCoords); });

    return !overlapped;
  }

  coords(): Coord[] {

    const ship = this.getShipRectangle();

    const coords = [];

    for (let r = ship.topLeft.row; r <= ship.bottomRight.row; r++) {
      for (let c = ship.topLeft.col; c <= ship.bottomRight.col; c++) {
        coords.push(new Coord(r, c));
      }
    }

    return coords;
  }

  public getShipRectangle(): Rectangle {

    let deltaRow = 1;
    let deltaCol = 1;

    if (this.orientation === HORIZONTAL) {
      deltaCol = this.len;
    } else {
      deltaRow = this.len;
    }

    return new Rectangle(
      new Coord(this.row, this.col),
      new Coord(this.row + deltaRow - 1, this.col + deltaCol - 1));
  }

}
