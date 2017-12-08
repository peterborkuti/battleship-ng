import { Component, OnInit, Output } from '@angular/core';
import { Map } from '../map/map';
import { MapService } from '../map/map.service';
import { AutoPlacement } from '../autoplacement/autoplacement';
import { Ship } from '../autoplacement/ship';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  enemyMap: Map;
  myMap: Map;

  constructor(private readonly mapService: MapService) {
  }

  ngOnInit() {
    let map = this.mapService.getMyMap();
    const ships = map.ships.get();

    const myMap = new Map(map.rows, map.cols, false);
    myMap.placeShips(ships);
    this.myMap = myMap;


    map = this.mapService.getEnemyMap();
    const shipLengths = this.getShipLengths(ships);

    const ap = new AutoPlacement(shipLengths, 10);
    const enemyMap = new Map(map.rows, map.cols, true);
    enemyMap.placeShips(ap.placeShips());
    this.enemyMap = enemyMap;

  }

  getShipLengths(ships: Ship[]) {
    return ships.map(function(s){ return s.len; });
  }

}
