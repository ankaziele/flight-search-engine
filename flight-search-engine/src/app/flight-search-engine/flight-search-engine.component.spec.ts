import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchEngineComponent } from './flight-search-engine.component';

describe('FlightSearchEngineComponent', () => {
  let component: FlightSearchEngineComponent;
  let fixture: ComponentFixture<FlightSearchEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightSearchEngineComponent ]
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
