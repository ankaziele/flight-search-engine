import { Component, OnInit, HostListener, Input } from '@angular/core';
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

   @HostListener('window:keydown', ['$event']) onArrowClicked(event: any) {
     if (event.keyCode === 40) {
      this.addToInput(this.selectedAirport)
      console.log('arrow up selected air', this.airportsList)
     } else if (
       event.keyCode ===38) {
        this.addToInput(this.selectedAirport)
        console.log('arrow down selected air', this.selectedAirport, this.airportsList)
     }
  }

  ngOnInit() {
    this.airportsList = this.airportsService.getAirports();
  }

  addToInput(selectedAirport){
    this.origin = selectedAirport.airport || selectedAirport.area;
    this.selectedAirport = selectedAirport

    console.log(selectedAirport)
  }



}