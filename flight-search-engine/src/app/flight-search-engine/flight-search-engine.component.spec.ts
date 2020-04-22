import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchEngineComponent } from './flight-search-engine.component';
import { AirportComponent } from '../airport/airport.component';
import { InputTogglerComponent } from '../input-toggler/input-toggler.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { PassengerCounterComponent } from '../passenger-counter/passenger-counter.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

describe('FlightSearchEngineComponent', () => {
  let component: FlightSearchEngineComponent;
  let fixture: ComponentFixture<FlightSearchEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        FlightSearchEngineComponent,
        AirportComponent,
        InputTogglerComponent,
        CalendarComponent,
        PassengerCounterComponent
      ],
      imports: [
        FormsModule,
        NgbModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
