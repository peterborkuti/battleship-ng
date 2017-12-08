import { Ship } from './ship';
import { ShipState, NUMBER_OF_ORIENTATIONS  } from './shipstate';
import { Coord } from './coord';
import { Utils } from './utils';

export class AutoPlacement {

  possibilities: number[];

  constructor (public readonly shipLengths: number[], public readonly mapSize: number) {}

  placeShips() {
    this.possibilities = Utils.getNumbersFromZero(NUMBER_OF_ORIENTATIONS * this.mapSize * this.mapSize);
    Utils.shuffleArray(this.possibilities);

    const ships = this.backtrack();
    console.log(ships);
    return ships;
  }

  acceptable(...ships: Ship[]) {
    const lastShip: Ship = ships.pop();

    if (!lastShip.isInMap(this.mapSize)) { return false; }

    return ships.every(lastShip.isNotOverlappedWith, lastShip);
  }

  isSolution(ships: Ship[]) {
    return ships.length === this.shipLengths.length;
  }

  getNewShip(ships: Ship[]) {
    let newShip = null;

    if (ships.length < this.shipLengths.length) {
      newShip = new Ship(this.shipLengths[ships.length]);
    }

    return newShip;
  }

  possibilityIndexToCoordAndOrientation(index: number): ShipState {
    const orientation = index % NUMBER_OF_ORIENTATIONS;

    index = Math.floor(index / NUMBER_OF_ORIENTATIONS);

    const row = Math.floor(index / this.mapSize);
    const col = index - row * this.mapSize;

    return new ShipState(new Coord(row, col), orientation);
  }

  backtrack(...ships: Ship[]) {
    if (this.isSolution(ships)) { return ships; }

    const newShip: Ship = this.getNewShip(ships);

    if (newShip === null) {
      return [];
    }

    for (let i = 0; i < this.possibilities.length; i++) {
      newShip.setState(this.possibilityIndexToCoordAndOrientation(this.possibilities[i]));

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
