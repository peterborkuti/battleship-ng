import { Component, OnInit, Input } from '@angular/core';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-emptymap',
  templateUrl: './emptymap.component.html',
  styleUrls: ['./emptymap.component.css']
})
export class EmptymapComponent extends MapComponent implements OnInit {
  @Input() shipOrientation: string;
  @Input() shipLength: number;

  constructor() {
    super();
  }

  ngOnInit() {

  }

}
