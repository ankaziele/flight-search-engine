import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-toggler',
  templateUrl: './input-toggler.component.html',
  styleUrls: ['./input-toggler.component.scss']
})
export class InputTogglerComponent implements OnInit {

  @Input() origin: string;
  @Input() destination: string;
  @Output() togglingAirports = new EventEmitter<{dest: string, origin: string}>();

  newDest: string;
  newOrigin: string

  constructor() {

   }

  ngOnInit() {
    console.log(this.newDest, 'newDest')
    console.log(this.newOrigin, 'newOrigin')
  }
  toggleAirports() {
    this.newDest = this.origin;
    this.newOrigin = this.destination;
    this.togglingAirports.emit({dest: this.newOrigin, origin: this.newDest})
  }

}
