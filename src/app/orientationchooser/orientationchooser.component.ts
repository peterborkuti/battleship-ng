import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HORIZONTAL, VERTICAL } from '../autoplacement/ship';


const PATH_PREFIX = 'assets/Ship-icon-';
const PATH_POSTFIX = '.png';
const ORIENTATION_STR = ['vertical', 'horizontal'];
const ORIENTATION_NUM = [VERTICAL, HORIZONTAL];

@Component({
  selector: 'app-orientationchooser',
  templateUrl: './orientationchooser.component.html',
  styleUrls: ['./orientationchooser.component.css']
})

export class OrientationchooserComponent implements OnInit {
  imagePath: string;
  state = 1;
  orientation = ORIENTATION_NUM[this.state];

  @Output() onOrientationChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.setImagePath();
  }

  setImagePath() {
    this.imagePath = PATH_PREFIX + ORIENTATION_STR[this.state] + PATH_POSTFIX;
  }

  changeState() {
    this.state = 1 - this.state;
    this.setImagePath();
    this.onOrientationChange.emit(ORIENTATION_NUM[this.state]);
  }

}
