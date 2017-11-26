import { Component, OnInit, ViewChild, ViewContainerRef, Input } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { Cell } from '../cell/cell';
import { Ship } from '../ships/ship';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  @Input() shipOrientation: string;
  @Input() shipLength: number;

  cells: Cell[][];

  constructor() {}

  ngOnInit() {
    this.cells = [];
    for (let r = 0; r < 10; r++) {
      this.cells.push([]);
       for (let c = 0; c < 10; c++) {
         this.cells[r].push(new Cell(r, c, 'btn-primary', 'btn-secondary', 'btn-success'));
       }
    }
  }

  shipCoords(row, col) {
    let deltaRow = 1;
    let deltaCol = 1;

    if (this.shipOrientation === 'horizontal') {
      deltaCol = this.shipLength;
    } else {
      deltaRow = this.shipLength;
    }

    row = Math.min(10 - deltaRow, row);
    col = Math.min(10 - deltaCol, col);

    const coords = [];
    for (let r = row; r < row + deltaRow; r++) {
      for (let c = col; c < col + deltaCol; c++) {
        coords.push({row: r, col: c});
      }
    }

    return coords;
  }

  mouseEnteredIntoCell(cell) {
    const cells = this.shipCoords(cell.row, cell.col);
    if (this.occupiedAny(cells)) {
      return;
    }

    this.shipCoords(cell.row, cell.col).forEach(e => {
      this.cells[e.row][e.col].highLight();
    });
  }

  mouseLeavedCell(cell) {
    const cells = this.shipCoords(cell.row, cell.col);
    if (this.occupiedAny(cells)) {
      return;
    }

    this.shipCoords(cell.row, cell.col).forEach(e => {
      this.cells[e.row][e.col].unHighlight();
    });
  }

  cellClicked(cell) {
    this.shipCoords(cell.row, cell.col).forEach(e => {
      this.cells[e.row][e.col].setCell();
    });
  }

  occupiedAny(coords) {
    return coords.some(e => this.cells[e.row][e.col].isSet());
  }


}
