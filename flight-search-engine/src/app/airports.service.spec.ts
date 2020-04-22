import { TestBed } from '@angular/core/testing';

import { AirportsService } from './airports.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('AirportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      HttpClient
    ]
  }));

  it('should be created', () => {
    const service: AirportsService = TestBed.get(AirportsService);
    expect(service).toBeTruthy();
  });
});
