import { Component, OnInit } from '@angular/core';

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
  accept(ship) {}
  first() {}
  next(ship) {}
  backtrack(ship) {
    if (this.reject(ship)) { return ; }
    if (this.accept(ship)) { console.log(this.ships); }
    let newShip = this.first();
    while (newShip !== null) {
      backtrack()
    }
  }

}
