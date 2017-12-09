import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { Map } from '../map/map';

@Component({
  selector: 'app-enemymap',
  templateUrl: './enemymap.component.html',
  styleUrls: ['./enemymap.component.css']
})
export class EnemymapComponent extends MapComponent implements OnInit {
@Output() hit = new EventEmitter();

  constructor() {
    super();
  }

  ngOnInit() {
  }

  cellClicked(event) {
    if (this.map.isCellDisabled(event.row, event.col)) {
      console.log('disabled');
    } else {
      console.log(event);
      this.map.disableCell(event.row, event.col);
      if (this.map.shoot(event.row, event.col)) {
        this.hit.emit('0');
      }
    }
  }

}
