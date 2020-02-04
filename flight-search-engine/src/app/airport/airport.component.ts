import {
  Component,
  OnInit,
  HostListener,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { AirportsService } from "../airports.service";
import { Area } from "../area";
import { Airport } from "../airport";

@Component({
  selector: "app-airport",
  templateUrl: "./airport.component.html",
  styleUrls: ["./airport.component.scss"]
})
export class AirportComponent implements OnInit {
  @Input() value: string = "";
  selectedAirport: any;
  flatAirportList: Airport[];
  airportsList: (Airport | Area)[];
  @Input() placeholder: string;
  isOpened = true;
  @Output() valueChange = new EventEmitter();
  @Input() origin: string;
  @Input() label: string;
  response: any;

  constructor(private airportsService: AirportsService) {}

  ngOnInit() {}

  addToInput() {
    this.value =
      this.selectedAirport.airport ||
      this.selectedAirport.code ||
      this.selectedAirport.country;
    if ((this.value = this.selectedAirport.airport)) {
      this.selectedAirport.selected = false;
    }

    this.valueChange.emit(this.selectedAirport);
    this.isOpened = false;
  }

  closeList() {
    this.isOpened = false;
  }

  onMouseOver(airport) {
    this.selectedAirport = airport;
    airport.selected = true;
  }

  onMouseLeave(airport) {
    airport.selected = false;
    this.selectedAirport = null;
  }

  previousAirport() {
    this.isOpened = true;
    if (!this.selectedAirport && this.flatAirportList.length) {
      this.selectedAirport = this.flatAirportList[0];
      this.selectedAirport.selected = true;
      this.value = this.selectedAirport.airport;
    } else {
      let newIndex =
        this.flatAirportList.findIndex(
          airport => airport == this.selectedAirport
        ) - 1;
      this.selectedAirport = this.flatAirportList[newIndex];
      this.selectedAirport.selected = true;
      this.flatAirportList[newIndex + 1].selected = false;
      this.value = this.selectedAirport.airport;
    }
  }

  nextAirport() {
    this.isOpened = true;
    if (!this.selectedAirport && this.flatAirportList.length) {
      this.selectedAirport = this.flatAirportList[0];
      this.selectedAirport.selected = true;
      this.value = this.selectedAirport.airport;
    } else {
      let newIndex =
        this.flatAirportList.findIndex(
          airport => airport == this.selectedAirport
        ) + 1;
      this.selectedAirport = this.flatAirportList[newIndex];
      this.selectedAirport.selected = true;
      this.flatAirportList[newIndex - 1].selected = false;
      this.value = this.selectedAirport.airport;
    }
  }

  clearInput() {
    this.value = "";
    this.isOpened = true;
  }

  onKeyDown() {
    this.airportsService.getAirports(this.value).subscribe(airports => {
      this.response = airports;
      this.airportsList = this.response.items;
      this.airportsList.sort((a, b) => {
        if ((a as Airport).airport && (b as Area).area) {
          return -1;
        } else if ((a as Area).area && (b as Airport).airport) {
          return 1;
        } else {
          return 0;
        }
      });
      this.flatAirportList = this.airportsService.getFlatListOfAirports(
        this.airportsList
      );
    });

    this.isOpened = true;
  }
}
