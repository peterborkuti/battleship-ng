import { Component, OnInit, Output } from '@angular/core';
import { Map } from '../map/map';
import { MapService } from '../map/map.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
  providers: [ MapService ]
})
export class BattleComponent implements OnInit {
  enemyMap: Map;
  myMap: Map;

  constructor(private readonly mapService: MapService) {
  }

  ngOnInit() {
    this.enemyMap = this.mapService.getEnemyMap();
    this.myMap = this.mapService.getMyMap();
    console.log('battle is running', this.enemyMap, this.myMap);
  }

}
