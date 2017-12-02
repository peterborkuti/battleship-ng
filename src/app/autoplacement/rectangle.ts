import { Coord } from './coord';

export class Rectangle {
  constructor (public readonly topLeft: Coord, public readonly bottomRight: Coord) {}
}
