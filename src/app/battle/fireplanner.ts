import { Coord } from '../autoplacement/coord';
import { Utils } from '../autoplacement/utils';
import { HORIZONTAL, VERTICAL } from '../autoplacement/shipstate';


class Ship {
  constructor(
    public readonly orientation: number = HORIZONTAL,
    public index: number = -1,
    public pos: number = 0,
    public len: number = 0,
    public ship: string = '') {}

    getUndiscoveredPositions(): Coord[] {
      const places = [];

      if (this.len > 0) {
        if (this.ship[0] === '0') {
          places.push(this.pos);
        }
        if (this.ship[this.len - 1] === '0') {
          places.push(this.pos + this.len - 1);
        }
      }

      const goals: Coord[] =
        places.map(function(place) {
          return (this.orientation === HORIZONTAL) ?
            new Coord(this.index, place) : new Coord(place, this.index);
        });

      return goals;
    }
}

export class FirePlanner {
  matrix = [];

  constructor(readonly rows = 10, readonly cols = 10) {
    for (let row = 0; row < rows; row++) {
      this.matrix.push([]);
      for (let col = 0; col < cols; col++) {
        this.matrix[row].push(0);
      }
    }
  }

  fire(): Coord {
    const targets: Coord[] = this.possibleTargets();

    if (targets.length > 0) {
      return this.randomTarget(targets);
    }

    return this.randomEmptyCell();
  }

  randomTarget(targets: Coord[]) {
    return targets[Math.floor(Math.random() * targets.length)];
  }

  randomEmptyCell() {
    const chessCoords = this.getChessBoardBlackPosCoords();

    Utils.shuffleArray(chessCoords);

    let emptyCell = new Coord(-1, -1);

    for (let i = 0; i < chessCoords.length; i++) {
      const c = chessCoords[i];
      if (this.matrix[c.row][c.col] === 0) {
        emptyCell = c;
        break;
      }
    }

    return emptyCell;
  }

  getChessBoardBlackPosCoords(): Coord[] {
    const chessCoords: Coord[] = [];
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if ((row + col) % 2 === 0) {
          chessCoords.push(new Coord(row, col));
        }
      }
    }

    return chessCoords;
  }

  possibleTargets(): Coord[] {
    const ship = this.getLengthiestShipFromMatrix();

    return ship.getUndiscoveredPositions();
  }

  getLengthiestShipFromMatrix() {
    const rowShip = this.getLengthiestShipFromRows(this.matrix, HORIZONTAL);
    const colShip = this.getLengthiestShipFromCols();

    if (rowShip.len < colShip.len) {
      return colShip;
    }

    return rowShip;
  }

  getLengthiestShipFromRows(matrix: number[][], orientation: number): Ship {
    let maxShip: Ship = new Ship();

    for (let row = 0; row < this.rows; row++) {
        const ship = this.getTheLengthiestShipFromLine(orientation, row, matrix[row].join());

        if (ship.len > maxShip.len) {
            maxShip = ship;
        }
    }

    return maxShip;
  }

  getLengthiestShipFromCols(): Ship {
    const transposed = Utils.transpose(this.matrix);

    return this.getLengthiestShipFromRows(transposed, VERTICAL);
  }

  getTheLengthiestShipFromLine(orientation: number, index: number, line: string): Ship {
    let maxPos = -1;
    let maxStr = '';
    let maxLen = 0;
    let shipResult: any;

    const re = /02+.?|.?2+0/g;

    while ((shipResult = re.exec(line)) !== null) {
      const ship = shipResult[0];
      if (ship.length > maxLen) {
        maxLen = ship.length;
        maxPos = shipResult.index;
        maxStr = ship;
      }
    }

    return new Ship(orientation, index, maxPos, maxLen);
  }
}
