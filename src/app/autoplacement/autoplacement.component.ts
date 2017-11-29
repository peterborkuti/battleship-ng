import { Component, OnInit } from '@angular/core';
import { SimpleShip } from './simpleship';

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

  reject(ship) {}
  acceptable(...ships: SimpleShip[]) {}
  first(ships: SimpleShip[]): SimpleShip {
    return new SimpleShip(0, 0, 0, 0);
  }
  next(ship) {}
  isSolution(ships: SimpleShip[]) {}

  backtrack(...ships: SimpleShip[]) {
    if (this.isSolution(ships)) { return ships; }

    let newShip: SimpleShip = this.first(ships);
    while (newShip !== null) {
      if (this.acceptable(...ships, newShip)) {
        let solution = this.backtrack(...ships, newShip);
      }
      let solution = this.backtrack(newShip);
      if solution !== null
      newShip = this.next(newShip);
    }

    this.ships.pop();
  }

}
