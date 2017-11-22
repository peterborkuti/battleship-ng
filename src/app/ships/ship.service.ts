import { SHIPS } from './shipdata';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Ship } from './ship';
import 'rxjs/add/operator/map';

@Injectable()
export class RaceService {

  constructor(private http: Http) { }

  getRaces() {
    return this.http.get('assets/ships.json')
          .map(response => <Ship[]>response.json().shipsData);
  }
}
