import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FlightSearchEngineComponent } from "./flight-search-engine/flight-search-engine.component";
import { CarRentalComponent } from "./car-rental/car-rental.component";
import { HotelsComponent } from "./hotels/hotels.component";

const routes: Routes = [
  { path: "", component: FlightSearchEngineComponent },
  { path: "car-rental", component: CarRentalComponent },
  { path: "hotels", component: HotelsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
