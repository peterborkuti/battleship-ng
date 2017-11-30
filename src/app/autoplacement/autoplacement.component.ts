import { Component, OnInit } from '@angular/core';
import { SimpleShip } from './simpleship';

const shipLengths = [5, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2];
const HORIZONTAL = 0;
const VERTICAL = 1;

@Component({
  selector: 'app-autoplacement',
  templateUrl: './autoplacement.component.html',
  styleUrls: ['./autoplacement.component.css']
})
export class AutoplacementComponent implements OnInit {

    constructor() { }

  ngOnInit() {
    console.log(this.backtrack());
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
    index = Math.floor(index / 2);
    const row = Math.floor(index / 10);
    const col = index - row * 10;

    return {row: row, col: col, orientation: orientation};
  }

  backtrack(...ships: SimpleShip[]) {
    if (this.isSolution(ships)) { return ships; }

    const newShip: SimpleShip = this.getNewShip(ships);

    if (newShip === null) {
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
