import {Map} from './map';
import { Injectable } from '@angular/core';

@Injectable()
export class MapService {
  private myMap: Map;
  private enemyMap: Map;

  constructor() {
    this.myMap = new Map(10, 10);
    this.enemyMap = new Map(10, 10);
  }

  getEnemyMap(): Map {
    console.log('getEnemyMap called');
    return this.enemyMap;
  }

  getMyMap(): Map {
    console.log('getMyMap called');
    return this.myMap;
  }
}
