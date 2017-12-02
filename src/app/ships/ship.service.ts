import { SHIPS } from './shipdata';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { VisualShip } from './visualship';
import 'rxjs/add/operator/map';

@Injectable()
export class ShipService {

  constructor(private http: Http) { }

  getShips() {
    return this.http.get('assets/ships.json')
          .map(response => <VisualShip[]>response.json().shipsData);
  }
}
