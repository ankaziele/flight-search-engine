import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-passenger-counter',
  templateUrl: './passenger-counter.component.html',
  styleUrls: ['./passenger-counter.component.scss']
})
export class PassengerCounterComponent implements OnInit {
  @Input() traveller: string;
  @Input() counter: number;
  @Output() numberOfPassengers = new EventEmitter<{counter: number, traveller: string}>();

  constructor() {}

  ngOnInit() {}

  sendNumberOfPassengers(event) {
    if (event.target.className === "fa fa-minus-circle") {
      if(this.counter === 0) {
        return
      }
      this.counter --
    }
    if (event.target.className === "fa fa-plus-circle") {
      this.counter++;
    }
    this.numberOfPassengers.emit({counter: this.counter, traveller: this.traveller});
  }
}