import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightHudComponent } from './flight-hud.component';

describe('FlightHudComponent', () => {
  let component: FlightHudComponent;
  let fixture: ComponentFixture<FlightHudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightHudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightHudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
