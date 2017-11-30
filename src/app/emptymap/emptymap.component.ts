import { Component, OnInit, Input } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { AutoPlacement } from '../autoplacement/autoplacement';
import { SimpleShip } from '../autoplacement/simpleship';

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

  clearBoard() {
    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 10; c++) {
        this.cells[r][c].resetCell();
      }
    }
  }

  placeShips(ships: SimpleShip[]) {
    const instance = this;
    ships.forEach(function(ship) {
      const orientation = (ship.orientation) ? 'vertical' : 'horizontal';
      const coords = instance.shipCoords(ship.row, ship.col, orientation, ship.len);
      coords.forEach(function(coord){
        instance.cells[coord.row][coord.col].highLight();
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
