import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  origin: string = "From";
  destination: string = "To"
  title = 'flight-search-engine';


  receiveChangeAirports($event) {
    console.log('incoming event dest', $event.dest)
    console.log('incoming event origin', $event.origin)

    this.origin = $event.dest;
    this.destination = $event.origin

    console.log('app orign', this.origin)
    console.log('app destination', this.destination)
  }


}
