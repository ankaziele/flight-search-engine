import { Component, OnInit, HostListener, Input } from '@angular/core';
import { AirportsService } from '../airports.service';
import { Area } from '../area';
import { Airport } from '../airport';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.scss']
})
export class AirportComponent implements OnInit {
  value: string = '';
  selectedAirport: any;
  airportsList: (Airport | Area)[];
  @Input() placeholder: string;
  isOpened = true;



  constructor(private airportsService: AirportsService) {
  }

  // @HostListener('window:keydown', ['$event']) onArrowClicked(event: any) {
  //   if (event.keyCode === 40) {
  //     this.addToInput(this.selectedAirport)
  //     // console.log('arrow up selected air', this.selectedAirport)
  //   } else if (
  //     event.keyCode === 38) {
  //     this.addToInput(this.selectedAirport)
  //     // console.log('arrow down selected air', this.selectedAirport)
  //   }
  // }

  ngOnInit() {
    console.log(this.placeholder)
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
    this.value = selectedAirport.airport;
    this.selectedAirport = selectedAirport;
  }

  closeList() {
    this.isOpened = false;
  }

  onMouseOver(airport){
    airport.selected = true;
  }

  onMouseLeave(airport){
    airport.selected = false;
    this.selectedAirport = null;
  }

  previousAirport() {
    this.isOpened = true;
    if (!this.selectedAirport && this.airportsList.length) {
      this.selectedAirport = this.airportsList[0]
      this.selectedAirport.selected =true
      this.value = this.selectedAirport.airport
      console.log(this.selectedAirport)
    } else {
      let newIndex = this.airportsList.findIndex(airport => airport == this.selectedAirport) - 1
      this.selectedAirport = this.airportsList[newIndex]
      this.selectedAirport.selected = true;
      // this.airportsList[newIndex+1].selected = false;
      this.value = this.selectedAirport.airport
      console.log(this.selectedAirport)
    }
      
    
  }


  nextAirport() {
    this.isOpened = true;
    if (!this.selectedAirport && this.airportsList.length) {
      this.selectedAirport = this.airportsList[0]
      this.selectedAirport.selected =true
      this.value = this.selectedAirport.airport
      console.log(this.selectedAirport)
    } else {
      let newIndex = this.airportsList.findIndex(airport => airport == this.selectedAirport) + 1;
      let previousIndex = this.airportsList.findIndex(airport => airport == this.selectedAirport)
      this.selectedAirport = this.airportsList[newIndex]
      this.selectedAirport.selected =true
      // this.airportsList[newIndex-1].selected = false;
      this.value = this.selectedAirport.airport
      console.log(this.selectedAirport)
      console.log(this.airportsList[newIndex-1])
    }
  }

  clearInput() {
    this.value = '';
  }
}