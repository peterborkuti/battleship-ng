import { SimpleShip } from './simpleship';

const HORIZONTAL = 0;
const VERTICAL = 1;
const NUMBER_OF_ORIENTATIONS = 2;

export class AutoPlacement {
  possibilities: number[];

  constructor (public readonly shipLengths: number[], public readonly mapSize: number) {

  }

  placeShips() {
    this.possibilities = this.getNumbersFromZero(NUMBER_OF_ORIENTATIONS * this.mapSize * this.mapSize);
    this.shuffleArray(this.possibilities);

    return this.backtrack();
  }

  notOverlappedSameOrientation(ship1: SimpleShip, ship2: SimpleShip) {
    let a = ship1;
    let b = ship2;

    if (a.orientation === HORIZONTAL) {
      if (a.row !== b.row) {return true; }

      if (a.col > b.col) { a = ship2; b = ship1; }

      return a.col + a.len <= b.col;
    } else {
      if (a.col !== b.col) {return true; }

      if (a.row > b.row) { a = ship2; b = ship1; }

      return a.row + a.len <= b.row;
    }
  }

  notOverlappedDifferentOrientation(ship1: SimpleShip, ship2: SimpleShip) {
    let a = ship1;
    let b = ship2;

    if (a.orientation !== HORIZONTAL) {
      a = ship2; b = ship1;
    }

    if (b.col < a.col || b.col >= a.col + a.len) { return true; }

    return (b.row > a.row) || (b.row + b.len <= a.row);
  }


  notOverlap(ship1: SimpleShip, ship2: SimpleShip) {
    if (ship1.orientation === ship2.orientation) {
      return this.notOverlappedSameOrientation(ship1, ship2);
    }

    return this.notOverlappedDifferentOrientation(ship1, ship2);
  }

  acceptable(...ships: SimpleShip[]) {
    const lastShip: SimpleShip = ships.pop();

    const notOverlappedWithLastShip = this.notOverlap.bind(this, lastShip);

    return ships.every(notOverlappedWithLastShip);
  }

  isSolution(ships: SimpleShip[]) {
    return ships.length === this.shipLengths.length;
  }

  getNewShip(ships: SimpleShip[]) {
    let newShip = null;

    if (ships.length < this.shipLengths.length) {
      newShip = new SimpleShip(0, 0, this.shipLengths[ships.length], 0);
    }

    return newShip;
  }

  possibilityIndexToCoordAndOrientation(index: number) {
    const orientation = index % NUMBER_OF_ORIENTATIONS;
    index = Math.floor(index / NUMBER_OF_ORIENTATIONS);
    const row = Math.floor(index / this.mapSize);
    const col = index - row * this.mapSize;

    return {row: row, col: col, orientation: orientation};
  }

  getNumbersFromZero(n: number) {
    return Array(n).fill(0).map(Function.call, Number);
  }

  // Durstenfeld, Fisher and Yates
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

  backtrack(...ships: SimpleShip[]) {
    if (this.isSolution(ships)) { return ships; }

    const newShip: SimpleShip = this.getNewShip(ships);

    if (newShip === null) {
      return [];
    }

    for (let i = 0; i < this.possibilities.length; i++) {
      const state = this.possibilityIndexToCoordAndOrientation(this.possibilities[i]);

      newShip.row = state.row;
      newShip.col = state.col;
      newShip.orientation = state.orientation;

      if (this.acceptable(...ships, newShip)) {
        const solution = this.backtrack(...ships, newShip);
        if (solution.length !== 0) {
          return solution;
        }
      }
    }

    return [];
  }
}
