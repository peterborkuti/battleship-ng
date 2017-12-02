import { HORIZONTAL } from './ship';
import { Coord } from './coord';

export class ShipState {
  constructor (public coord: Coord = new Coord(0, 0), public orientation: number = HORIZONTAL) {}
}
