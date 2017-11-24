import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ship } from '../ships/ship';
import { ShipService } from '../ships/ship.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbSlide } from '@ng-bootstrap/ng-bootstrap/';

@Component({
  selector: 'app-shiplist',
  templateUrl: './shiplist.component.html',
  styleUrls: ['./shiplist.component.css'],
  providers: [NgbCarouselConfig]
})
export class ShiplistComponent implements OnInit {
  ships: Ship[];
  @Output() onActiveChanged = new EventEmitter<Ship>();

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

      this.onActiveChanged.emit(this.ships[0]);
      }
    );
  }

  slideEventHandler(event) {
    console.log(event.current);
    this.onActiveChanged.emit(this.ships[event.current]);
  }

}
