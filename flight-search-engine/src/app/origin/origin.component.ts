import { Component, OnInit } from '@angular/core';
import { AirportsService } from '../airports.service';

@Component({
  selector: 'app-origin',
  templateUrl: './origin.component.html',
  styleUrls: ['./origin.component.css']
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
    console.log(this.airportsService.getAirports())
   }

  ngOnInit() {
    this.airportsList = this.airportsService.getAirports();
  }

  addToInput(selectedAirport){
    this.origin = selectedAirport.airport || selectedAirport.area;
    this.selectedAirport = selectedAirport
  }
}