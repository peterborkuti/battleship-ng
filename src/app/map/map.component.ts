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

  private getShipRectangle(row: number, col: number,
      orientation: string = this.shipOrientation,
      len: number = this.shipLength) {

    let deltaRow = 1;
    let deltaCol = 1;

    if (orientation === 'horizontal') {
      deltaCol = len;
    } else {
      deltaRow = len;
    }

    row = Math.min(10 - deltaRow, row);
    col = Math.min(10 - deltaCol, col);

    return {
      topLeft: {row: row, col: col},
      bottomRight: {row: row + deltaRow - 1, col: col + deltaCol - 1}};
  }

  private shipCoords(row: number, col: number,
      orientation: string = this.shipOrientation,
      len: number = this.shipLength) {

    const ship = this.getShipRectangle(row, col, orientation, len);

    const coords = [];
    for (let r = ship.topLeft.row; r <= ship.bottomRight.row; r++) {
      for (let c = ship.topLeft.col; c <= ship.bottomRight.col; c++) {
        coords.push({row: r, col: c});
      }
    }

    return coords;
  }

  neighbourhoodRectangle(row: number, col: number,
      orientation: string = this.shipOrientation,
      len: number = this.shipLength) {

    const ship = this.getShipRectangle(row, col, orientation, len);

    const row0 = Math.max(0, ship.topLeft.row - 1);
    const col0 = Math.max(0, ship.topLeft.col - 1);
    const row1 = Math.min(9, ship.bottomRight.row + 1);
    const col1 = Math.max(9, ship.bottomRight.col + 1);

    return {
      topLeft: {row: row0, col: col0},
      bottomRight: {row: row1, col: col1}};
  }

  neighbourhood(row: number, col: number,
      orientation: string = this.shipOrientation,
      len: number = this.shipLength) {

    const rect = this.neighbourhoodRectangle(row, col, orientation, len);

    const coords = [];
    for (let r = rect.topLeft.row; r <= rect.bottomRight.row; r++) {
      for (let c = rect.topLeft.col; c <= rect.bottomRight.col; c++) {
        coords.push({row: r, col: c});
      }
    }

    return coords;
  }

  mouseEnteredIntoCell(cell) {
    const cells = this.neighbourhood(cell.row, cell.col);
    if (this.occupiedAny(cells)) {
      return;
    }

    this.shipCoords(cell.row, cell.col).forEach(e => {
      this.cells[e.row][e.col].highLight();
    });
  }

  mouseLeavedCell(cell) {
    const cells = this.neighbourhood(cell.row, cell.col);
    if (this.occupiedAny(cells)) {
      return;
    }

    this.shipCoords(cell.row, cell.col).forEach(e => {
      this.cells[e.row][e.col].unHighlight();
    });
  }

  cellClicked(cell: Cell) {
    if (cell.isSet()) {
      const coords = cell.getShipCoords();
      coords.forEach(c => {
        this.cells[c.row][c.col].resetCell();
      });

      return;
    }

    const cells = this.neighbourhood(cell.row, cell.col);
    if (this.occupiedAny(cells)) {
      return;
    }

    this.shipCoords(cell.row, cell.col).forEach(e => {
        this.cells[e.row][e.col].setCell(cells);
    });
  }

  occupiedAny(coords) {
    return coords.some(e => this.cells[e.row][e.col].isSet());
  }
}
