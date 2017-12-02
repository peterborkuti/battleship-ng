import { Component, OnInit, ViewChild, ViewContainerRef, Input } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { Cell } from '../cell/cell';
import { AutoPlacement } from '../autoplacement/autoplacement';
import { Ship } from '../autoplacement/ship';
import { Coord } from '../autoplacement/coord';
import { Cells } from '../cell/cells';

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

  cells: Cells;

  constructor() {}

  ngOnInit() {
    this.cells = new Cells(this.rows, this.cols);
  }

  shipCanBePlaced(cell: Cell): {coords: Coord[], ship: Ship} {
    const ship = new Ship(this.shipLength, cell.row, cell.col, this.shipOrientation);

    const retVal = {coords: [], ship: ship};

    const coords = ship.coords();

    if (!ship.isInMap(this.rows, this.cols)) {
      return retVal;
    }

    if (this.cells.occupiedAny(coords)) {
      return retVal;
    }

    return {coords, ship};
  }

  mouseEnteredIntoCell(cell: Cell) {
    this.cells.highLightCoords(this.shipCanBePlaced(cell).coords);
  }

  mouseLeavedCell(cell: Cell) {
    this.cells.unHighLightCoords(this.shipCanBePlaced(cell).coords);
  }

  cellClicked(cell: Cell) {
    const instance = this;

    if (cell.isSet()) {
      this.cells.removeShip(cell.getCoord());

      this.mouseEnteredIntoCell(cell);

      return;
    }

    const canBePlaced = this.shipCanBePlaced(cell);

    if (canBePlaced.coords.length === 0) {
      return;
    }

    // this.cells.unHighLightCoords(canBePlaced.coords);

    this.cells.placeShip(canBePlaced.ship);
  }

  autoPlacementHandler() {
    const autoPlacement: AutoPlacement = new AutoPlacement([5, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2], 10);
    const ships = autoPlacement.placeShips();

    this.cells.clearBoard();
    this.cells.placeShips(ships);
  }
}
