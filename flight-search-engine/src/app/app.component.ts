import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  from: string = "From";
  to: string = "To"
  title = 'flight-search-engine';
}
