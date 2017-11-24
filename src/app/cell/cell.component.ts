import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Coord } from './coord';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})

export class CellComponent implements OnInit {
  status: number;

  @Input() row: number;
  @Input() col: number;

  @Output() onMouseEnter = new EventEmitter<Coord>();
  @Output() onMouseLeave = new EventEmitter<Coord>();
  @Output() onClick = new EventEmitter<Coord>();
  @Output() onDblClick = new EventEmitter<Coord>();

  constructor() { }

  ngOnInit() {
    this.status = 0;
  }

  mouseEnteredIntoCell(event) {
    console.log('enter', event);
    return this.onMouseEnter.emit(new Coord(this.row, this.col));
  }

  mouseLeavedCell() {
    console.log('leave', event);
    return this.onMouseLeave.emit(new Coord(this.row, this.col));
  }

  cellIsClicked() {
    console.log('click', event);
    return this.onClick.emit(new Coord(this.row, this.col));
  }

  cellIsDblClicked() {
    console.log('dblclick', event);
    return this.onDblClick.emit(new Coord(this.row, this.col));
  }

}
