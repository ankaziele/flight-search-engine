import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-search-engine';
  origin: string = '';


  originiEmitterParent(originName) {
    this.origin = originName
    console.log(this.origin, 'originName')
  }



}
