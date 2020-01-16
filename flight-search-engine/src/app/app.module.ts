import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTogglerComponent } from './input-toggler/input-toggler.component';
import { AirportComponent } from './airport/airport.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTogglerComponent,
    AirportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
