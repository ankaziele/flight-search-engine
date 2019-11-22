import { Component, OnInit, HostListener, Input } from '@angular/core';
import { AirportsService } from '../airports.service';
import { Area } from '../area';
import { Airport } from '../airport';

@Component({
  selector: 'app-origin',
  templateUrl: './origin.component.html',
  styleUrls: ['./origin.component.scss']
})
export class OriginComponent implements OnInit {
  origin: string = '';
  selectedAirport: any;
  airportsList: (Airport | Area)[];



  constructor(private airportsService: AirportsService) {
  }

  @HostListener('window:keydown', ['$event']) onArrowClicked(event: any) {
    if (event.keyCode === 40) {
      this.addToInput(this.selectedAirport)
      // console.log('arrow up selected air', this.selectedAirport)
    } else if (
      event.keyCode === 38) {
      this.addToInput(this.selectedAirport)
      // console.log('arrow down selected air', this.selectedAirport)
    }
  }

  ngOnInit() {
    this.airportsList = this.airportsService.getAirports();
    this.airportsList.sort((a, b) => {
      
      if ((a as Airport).airport && (b as Area).area) {
        return -1;
      }
      else if ((a as Area).area && (b as Airport).airport) {
        return 1;
      }
      else  {
        return 0;
      }
    })
  }

  addToInput(selectedAirport) {
    this.origin = selectedAirport.airport;
    this.selectedAirport = selectedAirport;
    console.log(this.origin, 'ori')
    console.log(this.selectedAirport.airport, 'airpo')

 
  }

  clearInput() {
    this.origin = '';
  }
}