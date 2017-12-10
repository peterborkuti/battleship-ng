import { Ship } from '../autoplacement/ship';
import { Coord } from '../autoplacement/coord';

class CellStyle {

}

export class Cell {
  private oldStyle: string;
  public style: {};
  private highlightBackup: string;
  private set: boolean;
  private ship: Ship;
  private disabled = false;
  public char = '';

  constructor (public readonly row: number, public readonly col: number,
     private readonly unsetStyle: string,
     private readonly highLightStyle: string,
     private readonly setStyle: string,
     public readonly coverShips: boolean = false) {
       const style = {};
       style[unsetStyle] = true;
       style[setStyle] = false;
       style[highLightStyle] = false;
       style['shoot'] = false;

       this.style = style;
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

  getActiveStyleName(): string {
    const instance = this;
    const styleNames = Object.keys(instance.style).filter(function(key){ return key !== 'shoot' && instance.style[key]; });
    if (styleNames.length > 0) {
      return styleNames[0];
    }

    return '';
  }

  setActiveStyle(styleName) {
    if (styleName === '') {
      return this.style;
    }

    const s = this.style;

    Object.keys(s).filter(function(key){ return(key !== 'shoot'); }).map(function(key) {
      s[key] = false;
    });

    s[styleName] = true;

    return s;
  }


  setShip(ship: Ship) {
    if (!this.set) {
      this.set = true;
      this.ship = ship.getClone();
      if (!this.coverShips) {
        this.highlightBackup = this.getActiveStyleName();
        this.style = this.setActiveStyle(this.setStyle);
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
      this.style = this.setActiveStyle(this.unsetStyle);
    }
    this.ship = null;
    this.set = false;
  }

  highLight() {
    this.highlightBackup = this.getActiveStyleName();
    this.style = this.setActiveStyle(this.highLightStyle);
  }

  unHighlight() {
    this.style = this.setActiveStyle(this.highlightBackup);
  }

  shoot() {
    if (this.isDisabled()) {
      return;
    }

    this.style['shoot'] = true;

    if (this.isSet()) {
      this.style = this.setActiveStyle(this.setStyle);
    } else {
      this.style = this.setActiveStyle(this.highLightStyle);
    }

    this.disable();
  }
}
