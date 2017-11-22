import { Component, OnInit } from '@angular/core';
import { Ship } from '../ships/ship';
import { ShipService } from '../ships/ship.service';

@Component({
  selector: 'app-shiplist',
  templateUrl: './shiplist.component.html',
  styleUrls: ['./shiplist.component.css']
})
export class ShiplistComponent implements OnInit {
  ships: Ship[];

  constructor(private shipService: ShipService) { }

  ngOnInit() {
    this.shipService.getShips().subscribe(data => this.ships = data);
    this.ships = this.ships.map(function(e){e['imagePath'] = 'assets/' + e.imageFileName; return e; });
  }

}
