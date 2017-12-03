import { Cells } from '../cell/cells';
import { Coord } from '../autoplacement/coord';
import { Ship } from '../autoplacement/ship';
import { Cell } from '../cell/cell';
import { AutoPlacement } from '../autoplacement/autoplacement';

class Placeable {
  constructor (
    public readonly isPlaceable: boolean = false,
    public readonly coords: Coord[] = []) {}
}

export class Map extends Cells {

  shipCanBePlaced(ship: Ship): Placeable {
    const coords = ship.coords();

    if (!ship.isInMap(this.rows, this.cols)) {
      return new Placeable();
    }

    if (this.occupiedAny(coords)) {
      return new Placeable();
    }

    return new Placeable(true, coords);
  }

  highLightShipIfPlaceable(ship: Ship) {
    this.highLightCoords(this.shipCanBePlaced(ship).coords);
  }

  unHighLightShipIfPlaceable(ship: Ship) {
    this.unHighLightCoords(this.shipCanBePlaced(ship).coords);
  }

  placeShipIfPlaceable(ship: Ship) {
    const placeable = this.shipCanBePlaced(ship);

    if (placeable.isPlaceable) {
      this.placeShip(ship);
    }
  }

  removeShip(coord: Coord): boolean {
    if (this.occupiedAny([coord])) {
      super.removeShip(coord);

      return true;
    }

    return false;
  }

  placeShips(ships: Ship[]) {
    this.clearBoard();
    super.placeShips(ships);
  }

  placeShipsAutomatically() {
    const autoPlacement: AutoPlacement = new AutoPlacement([5, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2], 10);
    const ships = autoPlacement.placeShips();

    this.placeShips(ships);
  }

}
