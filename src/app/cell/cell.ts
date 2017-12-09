import { Ship } from '../autoplacement/ship';
import { Coord } from '../autoplacement/coord';

export class Cell {
  private oldStyle: string;
  public style: string;
  private highlightBackup: string;
  private set: boolean;
  private ship: Ship;
  private disabled = false;

  constructor (public readonly row: number, public readonly col: number,
     public readonly unsetStyle: string,
     public readonly highLightStyle: string,
     public readonly setStyle: string,
     public readonly coverShips: boolean = false) {

       this.style = unsetStyle;
       this.set = false;
     }

  disable() {
    this.disabled = true;
  }

  isDisabled(): boolean {
    return this.disabled;
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
      this.ship = ship.getClone();
      if (!this.coverShips) {
        this.highlightBackup = this.setStyle;
        this.style = this.setStyle;
      }
    } else {
      this.resetCell();
    }
  }

  getShip(): Ship {
    if (this.isSet()) {
      return this.ship.getClone();
    }

    return null;
  }

  resetCell() {
    if (!this.coverShips) {
      this.highlightBackup = this.unsetStyle;
      this.style = this.unsetStyle;
    }
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

  shoot() {
    if (this.isSet()) {
      this.style = this.setStyle;
    } else {
      this.style = this.highLightStyle;
    }
  }
}
