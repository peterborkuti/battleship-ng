import { Component, OnInit, Input } from '@angular/core';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-emptymap',
  templateUrl: './emptymap.component.html',
  styleUrls: ['./emptymap.component.css']
})
export class EmptymapComponent extends MapComponent implements OnInit {
  @Input() shipOrientation = 0;
  @Input() shipLength = 5;

  constructor() {
    super();
  }

  ngOnInit() {

  }
}
