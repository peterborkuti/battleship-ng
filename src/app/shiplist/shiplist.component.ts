import { Component, OnInit } from '@angular/core';
import { Ship } from '../ships/ship';
import { ShipService } from '../ships/ship.service';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shiplist',
  templateUrl: './shiplist.component.html',
  styleUrls: ['./shiplist.component.css'],
  providers: [NgbCarouselConfig]
})
export class ShiplistComponent implements OnInit {
  ships: Ship[];
  active: number;

  constructor(private shipService: ShipService, config: NgbCarouselConfig) {
    config.interval = 0;
    config.wrap = true;
    config.keyboard = false;

   }

  ngOnInit() {
    this.shipService.getShips().subscribe(
      data => {
      this.ships = data;
      this.ships = this.ships.map(
          function(e){
            e['imagePath'] = 'assets/' + e.imageFileName; return e;
          }
        );
      this.active = 0;
      }
    );
  }

  next() {
    if (this.active < this.ships.length - 1) {
      this.active++;
    } else {
      this.active = 0;
    }
  }

  prev() {
    if (this.active > 0) {
      this.active--;
    } else {
      this.active = this.ships.length - 1;
    }
  }
}
