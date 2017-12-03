import { Coord } from './coord';

export const HORIZONTAL = 0;
export const VERTICAL = 1;
export const NUMBER_OF_ORIENTATIONS = 2;

export class ShipState {
  constructor (public coord: Coord = new Coord(0, 0), public orientation: number = HORIZONTAL) {}
}
