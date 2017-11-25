import { Component, OnInit, EventEmitter, Output } from '@angular/core';


const PATH_PREFIX = 'assets/Ship-icon-';
const PATH_POSTFIX = '.png';
const STATE_STRINGS = ['vertical', 'horizontal'];

@Component({
  selector: 'app-orientationchooser',
  templateUrl: './orientationchooser.component.html',
  styleUrls: ['./orientationchooser.component.css']
})

export class OrientationchooserComponent implements OnInit {
  imagePath: string;
  state: number;

  @Output() onOrientationChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.state = 1;
    this.changeState();
  }

  changeState() {
    this.state = 1 - this.state;
    this.imagePath = PATH_PREFIX + STATE_STRINGS[this.state] + PATH_POSTFIX;
    this.onOrientationChange.emit(STATE_STRINGS[this.state]);
    console.log(this.imagePath);
  }

}
