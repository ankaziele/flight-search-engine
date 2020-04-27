import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavBarComponent } from './top-nav-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';

describe('TopNavBarComponent', () => {
  let component: TopNavBarComponent;
  let fixture: ComponentFixture<TopNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavBarComponent ],
      imports: [
        RouterTestingModule.withRoutes(
          [
            { path: 'hotels', component: DummyComponent },
            { path: 'car-rental', component: DummyComponent }
          ]
        )
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should be 3 tabs in nav bar', () => {
    const tabs = fixture.debugElement.queryAll(By.css('.nav-link'))
    expect(tabs.length).toEqual(3)
  })

  it( 'should navigate to / before any tab is clicked', () => {
    const location = TestBed.get(Location);
    expect(location.path()).toBe('');
  })

  it('should navigate to /hotels when HOTELS tab is clicked', () => {
    const location = TestBed.get(Location);
    const tabs = fixture.debugElement.queryAll(By.css('.nav-link'));
    const hotelTab: HTMLLinkElement = tabs[1].nativeElement;
    hotelTab.click()
    fixture.detectChanges()
    fixture.whenStable().then( () => {
      expect(location.path()).toBe('/hotels')
    })
  })

  it('should navigate to /car-rental when CAR RENTAL tab is clicked', () => {
    const location = TestBed.get(Location);
    const tabs = fixture.debugElement.queryAll(By.css('.nav-link'));
    const carRentalTab: HTMLLinkElement = tabs[2].nativeElement;
    carRentalTab.click()
    fixture.detectChanges()
    fixture.whenStable().then( () => {
      expect(location.path()).toBe('/car-rental')
    })
  })
});


class DummyComponent {}