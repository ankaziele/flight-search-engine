import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OriginComponent } from './origin/origin.component';
import { HighlightDirective } from './highlight.directive';
import { LocationInputComponent } from './location-input/location-input.component';

@NgModule({
  declarations: [
    AppComponent,
    OriginComponent,
    HighlightDirective,
    LocationInputComponent
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
