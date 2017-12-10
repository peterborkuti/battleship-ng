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
@Output() acceptedFire = new EventEmitter();

  constructor() {
    super();
  }

  ngOnInit() {
  }

  cellClicked(event) {
    const acceptedFire = !this.map.isCellDisabled(event.row, event.col);

    if (this.map.shoot(event.row, event.col)) {
        this.hit.emit('');
    }

    if (acceptedFire) {
      this.acceptedFire.emit('');
    }
  }

}
