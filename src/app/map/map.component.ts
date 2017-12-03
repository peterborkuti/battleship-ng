import { Component, OnInit, ViewChild, ViewContainerRef, Input } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { Cell } from '../cell/cell';
import { AutoPlacement } from '../autoplacement/autoplacement';
import { Ship } from '../autoplacement/ship';
import { Coord } from '../autoplacement/coord';
import { Map } from './map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  @Input() shipOrientation: number;
  @Input() shipLength: number;

  @Input() map: Map;

  constructor() {}

  ngOnInit() {
  }

  private getShip(cell: Cell): Ship {
    return new Ship(this.shipLength, cell.row, cell.col, this.shipOrientation);
  }

  mouseEnteredIntoCell(cell: Cell) {
    this.map.highLightShipIfPlaceable(this.getShip(cell));
  }

  mouseLeavedCell(cell: Cell) {
    this.map.unHighLightShipIfPlaceable(this.getShip(cell));
  }

  cellClicked(cell: Cell) {
    if (this.map.removeShip(new Coord(cell.row, cell.col))) {
      this.mouseEnteredIntoCell(cell);

      return;
    }

    this.map.placeShipIfPlaceable(this.getShip(cell));
  }

  autoPlacementHandler() {
    const autoPlacement: AutoPlacement = new AutoPlacement([5, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2], 10);
    const ships = autoPlacement.placeShips();

    this.map.placeShips(ships);
  }
}
