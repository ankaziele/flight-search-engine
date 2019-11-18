import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.css']
})
export class LocationInputComponent implements OnInit {
  @Output() originEmitter = new EventEmitter<string>();
  @Input() origin: string = 'im here'
  constructor() { }

  ngOnInit() {
  }

  passOriginName() {
    this.originEmitter.emit(this.origin)
  }

}
