import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  origin: string = "From";
  destination: string = "To"
  title = 'flight-search-engine';
}
