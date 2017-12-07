import { Cell } from './cell';
import { Ship } from '../autoplacement/ship';
import { Coord } from '../autoplacement/coord';
export class Cells {
  cells: Cell[][];

  constructor(public readonly rows = 10, public readonly cols = 10, public readonly coverShips = false) {
    this.cells = [];
    for (let r = 0; r < this.rows; r++) {
      this.cells.push( [] );
       for (let c = 0; c < this.cols; c++) {
         this.cells[r].push(new Cell(r, c, 'btn-primary', 'btn-secondary', 'btn-success', coverShips));
       }
    }
  }

  public shoot(row: number, col: number) {
    this.cells[row][col].shoot();
  }
  public clearBoard() {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        this.cells[r][c].resetCell();
      }
    }
  }

  public occupiedAny(coords: Coord[]) {
    const instance = this;

    return coords.some(e => instance.cells[e.row][e.col].isSet());
  }

  public highLightCoords(coords: Coord[]) {
    const instance = this;

    if (coords.length > 0) {
      coords.forEach(e => {
        instance.cells[e.row][e.col].highLight();
      });
    }
  }

  public unHighLightCoords(coords: Coord[]) {
    const instance = this;

    if (coords.length > 0) {
      coords.forEach(e => {
        instance.cells[e.row][e.col].unHighlight();
      });
    }
  }

  public removeShip(coord: Coord) {
    const instance = this;

    const coords = this.cells[coord.row][coord.col].getShipCoords();

    coords.forEach(c => {
      instance.cells[c.row][c.col].resetCell();
    });
  }


  public placeShip(ship: Ship) {
    const instance = this;

    ship.coords().forEach(function(coord) {
      instance.cells[coord.row][coord.col].setShip(ship);
    });
  }

  public placeShips(ships: Ship[]) {
    const instance = this;

    ships.forEach(instance.placeShip, instance);
  }
}
