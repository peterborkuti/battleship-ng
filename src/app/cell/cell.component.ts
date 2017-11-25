import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Coord } from './coord';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})

export class CellComponent implements OnInit {
  status: number;
  buttonClass: string;

  @Input() row: number;
  @Input() col: number;

  @Output() onMouseEnter = new EventEmitter<CellComponent>();
  @Output() onMouseLeave = new EventEmitter<CellComponent>();
  @Output() onClick = new EventEmitter<CellComponent>();
  @Output() onDblClick = new EventEmitter<CellComponent>();

  constructor() { }

  ngOnInit() {
    this.status = 0;
    this.buttonClass = 'btn-primary';
  }

  setButtonClass(btnClass) {
    this.buttonClass = btnClass;
    console.log('Buttonclass is set to:', btnClass);
  }

  mouseEnteredIntoCell(event) {
    console.log('enter', this);
    this.onMouseEnter.emit(this);
  }

  mouseLeavedCell() {
    console.log('leave', event);
    this.onMouseLeave.emit(this);
  }

  cellIsClicked() {
    console.log('click', event);
    this.onClick.emit(this);
  }

  cellIsDblClicked() {
    console.log('dblclick', event);
    this.onDblClick.emit(this);
  }

}
