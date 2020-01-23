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
  adultCounter: number = 1;
  childrenCounter: number = 0;

  receiveChangeAirports($event) {
    console.log("incoming event dest", $event.dest);
    console.log("incoming event origin", $event.origin);

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

}
