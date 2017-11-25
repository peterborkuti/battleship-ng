import { Component, OnInit } from '@angular/core';
import { Ship } from '../ships/ship';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})
export class PlacementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newShipSelected(ship: Ship) {
    console.log('ship selected:', ship.name);
  }

  shipOrientationChanged(orientation) {
    console.log('ship orientation changed:', orientation);
  }

}
