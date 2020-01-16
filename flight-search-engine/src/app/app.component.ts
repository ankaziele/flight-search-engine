import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  origin: string = '';
  destination: string = '';
  title = 'flight-search-engine';
  from: string = "From";
  to: string = "To"


  receiveChangeAirports($event) {
    console.log('incoming event dest', $event.dest)
    console.log('incoming event origin', $event.origin)

    this.origin = $event.dest;
    this.destination = $event.origin

    console.log('app orign', this.origin)
    console.log('app destination', this.destination)
  }

  incomingOrigin($event) {
    console.log('przyszlo org', $event)
    this.origin = $event.airport
  }

  incomingDestination($event) {
    console.log('przyszlo dest ', $event)
    this.destination = $event.airport
  }


}
