import { Component, OnInit, Input } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { AutoPlacement } from '../autoplacement/autoplacement';
import { SimpleShip } from '../autoplacement/simpleship';

@Component({
  selector: 'app-emptymap',
  templateUrl: './emptymap.component.html',
  styleUrls: ['./emptymap.component.css']
})
export class EmptymapComponent extends MapComponent implements OnInit {
  @Input() shipOrientation: number;
  @Input() shipLength: number;

  constructor() {
    super();
  }

  ngOnInit() {

  }
}
