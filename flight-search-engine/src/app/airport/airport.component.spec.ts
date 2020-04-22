import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportComponent } from './airport.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AirportsService } from '../airports.service';
import { By } from '@angular/platform-browser';

describe('AirportComponent', () => {
  let component: AirportComponent;
  let fixture: ComponentFixture<AirportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportComponent ],
      imports: [ FormsModule, HttpClientModule ],
      providers: [
        { provide: AirportsService, useClass: AiportServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have an input element', () => {
    let inputElement = fixture.debugElement.query(By.css('input'))
    expect(inputElement).toBeTruthy()
  })

it ('should contain close span', () => {
  let closeSpan = fixture.debugElement.query(By.css('.close'))
  console.log(closeSpan)
})

});


class AiportServiceMock {

}
