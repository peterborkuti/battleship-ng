import { Component, OnInit, Output } from '@angular/core';
import { Map } from '../map/map';
import { MapService } from '../map/map.service';
import { AutoPlacement } from '../autoplacement/autoplacement';
import { Ship } from '../autoplacement/ship';
import { Utils } from '../autoplacement/utils';
import { Battle } from './battle';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent extends Battle  implements OnInit {

  constructor(private readonly mapService: MapService) {
    super(mapService.getMyMap(), mapService.getEnemyMap());
  }

  ngOnInit() {
    this.init();
  }

}
