import { Component, OnInit, Output } from '@angular/core';
import { Map } from '../map/map';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  @Output() enemyMap: Map;
  @Output() myMap: Map;

  constructor() {
    this.enemyMap = new Map(10, 10);
    this.myMap = new Map(10, 10);
    console.log('battle is running', this.enemyMap, this.myMap);
  }

  ngOnInit() {
  }

}
