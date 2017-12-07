import { Component, OnInit, Input } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { Map } from '../map/map';

@Component({
  selector: 'app-enemymap',
  templateUrl: './enemymap.component.html',
  styleUrls: ['./enemymap.component.css']
})
export class EnemymapComponent extends MapComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  cellClicked(event) {
    console.log(event);
    this.map.shoot(event.row, event.col);
  }

}
