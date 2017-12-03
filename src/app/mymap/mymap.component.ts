import { Component, OnInit, Input } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { Map } from '../map/map';

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
    console.log('MyMap component onInit:', this.map);
  }

}
