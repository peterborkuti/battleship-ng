import { Component, OnInit } from '@angular/core';
import { Ship } from '../autoplacement/ship';
import { VisualShip } from '../ships/visualship';
import { Map } from '../map/map';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})
export class PlacementComponent implements OnInit {
  shipLength: number;
  shipOrientation: string;
  map: Map;

  constructor() {
    this.map = new Map(10, 10);
  }

  ngOnInit() {
  }

  newShipSelected(ship: VisualShip) {
    this.shipLength = ship.shipLength;
    console.log('placement:ship selected:', ship.name);
  }

  shipOrientationChanged(orientation) {
    this.shipOrientation = orientation;
    console.log('placement: ship orientation changed:', orientation);
  }

  autoPlacementHandler() {
    this.map.placeShipsAutomatically();

  }

}
