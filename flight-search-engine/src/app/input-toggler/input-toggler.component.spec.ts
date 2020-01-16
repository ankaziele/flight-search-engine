import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTogglerComponent } from './input-toggler.component';

describe('InputTogglerComponent', () => {
  let component: InputTogglerComponent;
  let fixture: ComponentFixture<InputTogglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTogglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
