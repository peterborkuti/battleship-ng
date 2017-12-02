import { Rectangle } from './rectangle';
import { Coord } from './coord';

export const HORIZONTAL = 0;
export const VERTICAL = 1;
export const NUMBER_OF_ORIENTATIONS = 2;

export class Ship {
  constructor(
    public len: number,
    public row: number = 0,
    public col: number = 0,
    public orientation: number = HORIZONTAL) {}

  toString() {
    return 'Ship{' + [this.len, this.row, this.col, this.orientation].join(',') + '}';
  }

  isInMap(rows: number = 10, cols: number = 10): boolean {

    return false;
  }

  isNotOverlappedWith(ship: Ship): boolean {
    const shipCoords = ship.coords().join(';');

    const notOverlapped =
      this.coords().every(function(c) { return shipCoords.indexOf(c.toString()) === -1; });

    return notOverlapped;
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
