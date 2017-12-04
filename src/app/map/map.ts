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

export class Ships {
  ships: Ship[];

  constructor() {
    this.ships = [];
  }

  set(ships: Ship[]) {
    this.ships = ships;
  }

  add(ship: Ship) {
    this.ships.push(ship);
  }

  remove(ship: Ship) {
    if (ship == null) {
      return;
    }

    let i = 0;

    for (; i < this.ships.length; i++) {
      if (this.ships[i].toString() === ship.toString()) {
        break;
      }
    }

    if (i < this.ships.length) {
      this.ships.splice(i, 1);
    }
  }

  get(): Ship[] {
    return this.ships;
  }
}

export class Map extends Cells {
  ships: Ships;

  constructor(rows: number, cols: number) {
    super(rows, cols);
    this.ships = new Ships();
  }

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

  placeShip(ship: Ship) {
    super.placeShip(ship);
    this.ships.add(ship);
  }

  removeShip(coord: Coord): boolean {
    if (this.occupiedAny([coord])) {
      super.removeShip(coord);
      this.ships.remove(this.cells[coord.row][coord.col].getShip());

      return true;
    }

    return false;
  }

  placeShips(ships: Ship[]) {
    this.clearBoard();
    super.placeShips(ships);
    this.ships.set(ships);
  }

  placeShipsAutomatically() {
    const autoPlacement: AutoPlacement = new AutoPlacement([5, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2], 10);
    const ships = autoPlacement.placeShips();

    this.placeShips(ships);
  }

}
