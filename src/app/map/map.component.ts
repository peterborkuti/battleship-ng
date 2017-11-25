import { Component, OnInit } from '@angular/core';
import { CellComponent } from '../cell/cell.component';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  cells = [];

  constructor() {
   }

  ngOnInit() {
    this.cells = [];
    for (let r = 0; r < 10; r++) {
      this.cells.push([]);
       for (let c = 0; c < 10; c++) {
         this.cells[r].push(new CellComponent(r, c));
       }
    }
  }

  cellClicked(coord) {
    console.log('cell clikced:', coord);
  }

  mouseEnteredIntoCell(coord) {

  }

  mouseLeavedCell(coord) {

  }

}
