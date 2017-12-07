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
    this.myMap = this.mapService.getMyMap();
    this.enemyMap = this.mapService.getEnemyMap();

    const shipLengths = this.getShipLengths(this.myMap.ships.get());

    const ap = new AutoPlacement(shipLengths, 10);
    this.enemyMap.placeShips(ap.placeShips());
  }

  getShipLengths(ships: Ship[]) {
    return ships.map(function(s){ return s.len; });
  }

}
