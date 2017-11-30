import { Component, OnInit } from '@angular/core';
import { SimpleShip } from './simpleship';
import { AutoPlacement } from './autoplacement';

const shipLengths = [5, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2];
const HORIZONTAL = 0;
const VERTICAL = 1;

@Component({
  selector: 'app-autoplacement',
  templateUrl: './autoplacement.component.html',
  styleUrls: ['./autoplacement.component.css']
})
export class AutoplacementComponent implements OnInit {
  autoPlacement: AutoPlacement;

  constructor() { }

  ngOnInit() {
    this.autoPlacement = new AutoPlacement([5, 4, 3, 3, 3, 2, 2, 2], 10);
    console.log(this.autoPlacement.placeShips());
  }

}
