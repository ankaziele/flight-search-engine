import { Component, ViewChild, OnInit, AfterViewInit, AfterContentInit, AfterViewChecked } from '@angular/core';
import { LocationInputComponent } from './location-input/location-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(LocationInputComponent, null) originName;

  title = 'flight-search-engine';
  origin: string = '';

  ngOnInit() {
    // this.origin = this.originName.origin 
  }

  ngAfterViewChecked() {
    console.log('after', this.originName.origin)
    this.origin = this.originName.origin 
    console.log('this.origin', this.origin)
  }

  // ngAfterViewInit() {
  //   console.log(this.originName, 'jigsao')
  //   this.origin = this.originName.origin
  //   console.log(this.originName.origin, 'ORIGINNNN')
  // }



}
