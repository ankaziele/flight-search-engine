import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InputTogglerComponent } from "./input-toggler/input-toggler.component";
import { AirportComponent } from "./airport/airport.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CalendarComponent } from "./calendar/calendar.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { TopNavBarComponent } from "./top-nav-bar/top-nav-bar.component";
import { PassengerCounterComponent } from "./passenger-counter/passenger-counter.component";
import { CarRentalComponent } from "./car-rental/car-rental.component";
import { HotelsComponent } from "./hotels/hotels.component";
import { RouterModule } from "@angular/router";
import { FlightSearchEngineComponent } from "./flight-search-engine/flight-search-engine.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from '@angular/common/http';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTogglerComponent,
    AirportComponent,
    CalendarComponent,
    TopNavBarComponent,
    PassengerCounterComponent,
    CarRentalComponent,
    HotelsComponent,
    FlightSearchEngineComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    NgbModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
