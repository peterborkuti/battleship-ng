import { Component, OnInit } from '@angular/core';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-emptymap',
  templateUrl: './emptymap.component.html',
  styleUrls: ['./emptymap.component.css']
})
export class EmptymapComponent extends MapComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
