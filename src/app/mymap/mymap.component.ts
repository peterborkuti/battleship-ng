import { Component, OnInit } from '@angular/core';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-mymap',
  templateUrl: './mymap.component.html',
  styleUrls: ['./mymap.component.css']
})
export class MymapComponent extends MapComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
