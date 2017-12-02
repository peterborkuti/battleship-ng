export class Coord {
  public static arrayToString(coords: Coord[]) {
    return coords.join(',');
  }

  public static arrayStrictOrderEqual(coords1: Coord[], coords2: Coord[]) {
    return Coord.arrayToString(coords1) === Coord.arrayToString(coords2);
  }

  constructor (public readonly row: number, public readonly col: number) {}

  public isAmongCoords(arr: Coord[]) {
    return Coord.arrayToString(arr).indexOf(this.toString()) > -1;
  }

  public toString() {
    return '(' + this.row + ',' + this.col + ')';
  }

  public equal(coord: Coord) {
    return coord.toString() === this.toString();
  }

}
