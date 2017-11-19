import { Component, OnInit } from '@angular/core';
import { MapComponent } from '../map/map.component';

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

}
