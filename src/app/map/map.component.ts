import { Component, OnInit, ViewChild, ViewContainerRef, Input } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { Cell } from '../cell/cell';
import { AutoPlacement } from '../autoplacement/autoplacement';
import { Ship } from '../autoplacement/ship';
import { Coord } from '../autoplacement/coord';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  @Input() shipOrientation: number;
  @Input() shipLength: number;
  @Input() rows = 10;
  @Input() cols= 10;

  cells: Cell[][];

  constructor() {}

  ngOnInit() {
    this.cells = [];
    for (let r = 0; r < this.rows; r++) {
      this.cells.push([]);
       for (let c = 0; c < this.cols; c++) {
         this.cells[r].push(new Cell(r, c, 'btn-primary', 'btn-secondary', 'btn-success'));
       }
    }
  }

  shipCanBePlaced(cell: Cell): {coords: Coord[], ship: Ship} {
    const ship = new Ship(this.shipLength, cell.row, cell.col, this.shipOrientation);

    const retVal = {coords: [], ship: ship};

    const coords = ship.coords();

    if (!ship.isInMap(this.rows, this.cols)) {
      return retVal;
    }

    if (this.occupiedAny(coords)) {
      return retVal;
    }

    return {coords, ship};
  }

  mouseEnteredIntoCell(cell: Cell) {
    const instance = this;
    const canBePlaced = this.shipCanBePlaced(cell);

    if (canBePlaced.coords.length > 0) {
      canBePlaced.coords.forEach(e => {
        instance.cells[e.row][e.col].highLight();
      });
    }
  }

  mouseLeavedCell(cell: Cell) {
    const instance = this;
    const canBePlaced = this.shipCanBePlaced(cell);

    if (canBePlaced.coords.length > 0) {
      canBePlaced.coords.forEach(e => {
        instance.cells[e.row][e.col].unHighlight();
      });
    }
  }

  cellClicked(cell: Cell) {
    const instance = this;
    if (cell.isSet()) {
      const coords = cell.getShipCoords();

      coords.forEach(c => {
        instance.cells[c.row][c.col].resetCell();
      });

      this.mouseEnteredIntoCell(cell);

      return;
    }

    const canBePlaced = this.shipCanBePlaced(cell);

    if (canBePlaced.coords.length > 0) {
      canBePlaced.coords.forEach(c => {
        instance.cells[c.row][c.col].setShip(canBePlaced.ship);
      });
    }
  }

  occupiedAny(coords: Coord[]) {
    const instance = this;
    return coords.some(e => instance.cells[e.row][e.col].isSet());
  }

  /**
   * AutoPlacement
   * @memberof MapComponent
   */
  clearBoard() {
    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 10; c++) {
        this.cells[r][c].resetCell();
      }
    }
  }

  private placeShips(ships: Ship[]) {
    const instance = this;

    ships.forEach(function(ship) {
      ship.coords().forEach(function(coord) {
        instance.cells[coord.row][coord.col].setShip(ship);
      });
    });
  }

  autoPlacementHandler() {
    const autoPlacement: AutoPlacement = new AutoPlacement([5, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2], 10);
    const ships = autoPlacement.placeShips();

    this.clearBoard();
    this.placeShips(ships);
  }
}
