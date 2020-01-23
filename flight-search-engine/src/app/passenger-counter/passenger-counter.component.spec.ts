import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerCounterComponent } from './passenger-counter.component';

describe('PassengerCounterComponent', () => {
  let component: PassengerCounterComponent;
  let fixture: ComponentFixture<PassengerCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
