import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Cell } from './cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})

export class CellComponent implements OnInit {

  @Input() cell: Cell;

  @Output() onMouseEnter = new EventEmitter<Cell>();
  @Output() onMouseLeave = new EventEmitter<Cell>();
  @Output() onClick = new EventEmitter<Cell>();
  @Output() onDblClick = new EventEmitter<Cell>();

  constructor() { }

  ngOnInit() {
  }

  mouseEnteredIntoCell(event) {
    console.log('enter', this);
    this.onMouseEnter.emit(this.cell);
  }

  mouseLeavedCell() {
    console.log('leave', event);
    this.onMouseLeave.emit(this.cell);
  }

  cellIsClicked() {
    console.log('click', event);
    this.onClick.emit(this.cell);
  }

  cellIsDblClicked() {
    console.log('dblclick', event);
    this.onDblClick.emit(this.cell);
  }

}
