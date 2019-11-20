import { Component, OnInit, HostListener, Input } from '@angular/core';
import { AirportsService } from '../airports.service';

@Component({
  selector: 'app-origin',
  templateUrl: './origin.component.html',
  styleUrls: ['./origin.component.scss']
})
export class OriginComponent implements OnInit {
  origin: string = '';
  selectedAirport: any;
  airportsList: ({
    airport: string,
    code: string,
    country: string,
  } | {
    area: string,
    items: any[]
  })[];

  constructor(private airportsService: AirportsService) {
  }

  @HostListener('window:keydown', ['$event']) onArrowClicked(event: any) {
    if (event.keyCode === 40) {
      this.addToInput(this.selectedAirport)
      console.log('arrow up selected air', this.selectedAirport)
    } else if (
      event.keyCode === 38) {
      this.addToInput(this.selectedAirport)
      console.log('arrow down selected air', this.selectedAirport)
    }
  }

  ngOnInit() {
    this.airportsList = this.airportsService.getAirports();
  }

  addToInput(selectedAirport) {
    this.origin = selectedAirport.airport;
    this.selectedAirport = selectedAirport;
 
  }
}