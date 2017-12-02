export class Coord {
  constructor (public readonly row: number, public readonly col: number) {}

  public toString() {
    return '(' + this.row + ',' + this.col + ')';
  }
}
