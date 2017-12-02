import { Ship } from '../autoplacement/ship';
import { Coord } from '../autoplacement/coord';

export class Cell {
  private oldStyle: string;
  public style: string;
  private highlightBackup: string;
  private set: boolean;
  private ship: Ship;

  constructor (public readonly row: number, public readonly col: number,
     public readonly unsetStyle: string,
     public readonly highLightStyle: string,
     public readonly setStyle: string) {

       this.style = unsetStyle;
       this.set = false;
     }

  isSet(): boolean {
    return this.set;
  }

  getShipCoords(): Coord[] {
    return this.ship.coords();
  }

  getCoord(): Coord {
    return new Coord(this.row, this.col);
  }

  setShip(ship: Ship) {
    if (!this.set) {
      this.set = true;
      this.ship = ship;
      this.highlightBackup = this.setStyle;
      this.style = this.setStyle;
    } else {
      this.resetCell();
    }
  }

  resetCell() {
    this.highlightBackup = this.unsetStyle;
    this.style = this.unsetStyle;
    this.ship = null;
    this.set = false;
  }

  highLight() {
    this.highlightBackup = this.style;
    this.style = this.highLightStyle;
  }

  unHighlight() {
    this.style = this.highlightBackup;
  }
}
