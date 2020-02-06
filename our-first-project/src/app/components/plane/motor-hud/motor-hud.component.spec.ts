import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorHudComponent } from './motor-hud.component';

describe('MotorHudComponent', () => {
  let component: MotorHudComponent;
  let fixture: ComponentFixture<MotorHudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorHudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorHudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
