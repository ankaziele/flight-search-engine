import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  origin: string = "";
  destination: string = "";
  title = "flight-search-engine";
  from: string = "From";
  to: string = "To";
  checkBox: boolean;
  adult: string = 'Adults';
  child: string = 'Children';
  children: string = 'Children';
  adultCounter: number = 1;
  childCounter: number = 0;

  receiveChangeAirports($event) {

    this.origin = $event.dest;
    this.destination = $event.origin;
  }

  incomingOrigin($event) {
    this.origin = $event.airport;
  }

  incomingDestination($event) {
    this.destination = $event.airport;
  }

  isCheckBoxSelected($event) {
    this.checkBox = $event.selected;
  } 

  updateNumberOfTravellers(event) {

    if(event.traveller === this.adult) {
      this.adultCounter = event.counter
    }
    if(event.traveller === this.child) {

      this.childCounter = event.counter
    }
  }

}
