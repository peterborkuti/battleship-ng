import { Component, OnInit } from '@angular/core';
import { Ship } from '../ships/ship';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})
export class PlacementComponent implements OnInit {
  shipLength: number;
  shipOrientation: string;

  constructor() { }

  ngOnInit() {
  }

  newShipSelected(ship: Ship) {
    this.shipLength = ship.shipLength;
    console.log('placement:ship selected:', ship.name);
  }

  shipOrientationChanged(orientation) {
    this.shipOrientation = orientation;
    console.log('placement: ship orientation changed:', orientation);
  }

}
