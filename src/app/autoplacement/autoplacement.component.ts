import { Component, OnInit } from '@angular/core';
import { SimpleShip } from './simpleship';

const shipLengths = [5, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2];

@Component({
  selector: 'app-autoplacement',
  templateUrl: './autoplacement.component.html',
  styleUrls: ['./autoplacement.component.css']
})
export class AutoplacementComponent implements OnInit {

  private ships;
  constructor() { }

  ngOnInit() {
    this.ships = [];
  }

  notOverlappedSameDirections(ship1: SimpleShip, ship2: SimpleShip) {

  }

  notOverlap(ship1: SimpleShip, ship2: SimpleShip) {
    if (ship1.orientation === ship2.orientation) {
      return notOverlappedSameDirections(ship1, ship2);
    }

    return notOverlappedDifferentDirections(ship1, ship2);
  }

  acceptable(...ships: SimpleShip[]) {
    const lastShip: SimpleShip = ships.pop();

    const notOverlappedWithLastShip = this.notOverlap.bind(this, lastShip);

    return ships.every(notOverlappedWithLastShip);
  }

  isSolution(ships: SimpleShip[]) {
    return ships.length === shipLengths.length;
  }

  getNewShip(ships: SimpleShip[]) {
    let newShip = null;

    if (ships.length < shipLengths.length) {
      newShip = new SimpleShip(0, 0, shipLengths[ships.length], 0);
    }

    return newShip;
  }

  possibilityIndexToCoordAndOrientation(index: number) {
    const orientation = index % 2;
    index /= 2;
    const row = index / 10;
    const col = index - row * 10;

    return {row: row, col: col, orientation: orientation};
  }

  backtrack(...ships: SimpleShip[]) {
    if (this.isSolution(ships)) { return ships; }

    const newShip: SimpleShip = this.getNewShip(ships);

    if (newShip === {}) {
      return [];
    }

    for (let index = 0; index < 2 * 10 * 10; index++) {
      const state = this.possibilityIndexToCoordAndOrientation(index);
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
