import { Map } from '../map/map';
import { AutoPlacement } from '../autoplacement/autoplacement';
import { Utils } from '../autoplacement/utils';
import { Ship } from '../autoplacement/ship';
import { FirePlanner } from './fireplanner';

export class Battle {
  enemyMap: Map;
  myMap: Map;
  opponentWin = false;
  youWin = false;
  numberOfShipCells: number;
  private enemy: FirePlanner;
  private enemyHitCounter = 0;

  constructor(private mymap: Map, private enemymap: Map) {}

  hitOnEnemyMap(e) {
    console.log('Hit on enemymap');
    this.enemyHitCounter++;
    if (this.enemyHitCounter >= this.numberOfShipCells) {
      this.youWin = true;
    }
  }

  fire() {
    const coord = this.enemy.fire();
    const hit = this.myMap.shoot(coord.row, coord.col);
    this.enemy.setMatrix(coord, hit);

    console.log('fire:', coord, hit);
  }

  init() {
    const ships = this.mymap.ships.get();

    const myMap = new Map(this.mymap.rows, this.mymap.cols, false);
    myMap.placeShips(ships);
    this.myMap = myMap;

    const shipLengths = this.getShipLengths(ships);

    const ap = new AutoPlacement(shipLengths, 10);
    const enemyMap = new Map(this.enemymap.rows, this.enemymap.cols, false);
    enemyMap.placeShips(ap.placeShips());
    this.enemyMap = enemyMap;

    this.numberOfShipCells = Utils.sum(shipLengths);

    this.enemy = new FirePlanner(this.mymap.rows, this.mymap.cols);

  }

  getShipLengths(ships: Ship[]) {
    return ships.map(function(s){ return s.len; });
  }
}
