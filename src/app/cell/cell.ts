export class Cell {
  private oldStyle: string;
  public style: string;
  private highlightBackup: string;
  private set: boolean;
  private shipCoords = [];

  constructor (public readonly row: number, public readonly col: number,
     public readonly unsetStyle: string,
     public readonly highLightStyle: string,
     public readonly setStyle: string) {

       this.style = unsetStyle;
       this.set = false;
     }

  isSet() {
    return this.set;
  }

  getShipCoords() {
    return this.shipCoords;
  }

  setCell(shipCoords) {

    if (!this.set) {
      this.set = true;
      this.shipCoords = shipCoords;
      this.highlightBackup = this.setStyle;
      this.style = this.setStyle;
    } else {
      this.resetCell();
    }
  }

  resetCell() {
    this.highlightBackup = this.unsetStyle;
    this.style = this.unsetStyle;
    this.shipCoords = [];
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
