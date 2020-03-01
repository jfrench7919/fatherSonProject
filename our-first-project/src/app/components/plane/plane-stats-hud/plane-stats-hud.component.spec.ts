import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneStatsHudComponent } from './plane-stats-hud.component';

describe('PlaneStatsHudComponent', () => {
  let component: PlaneStatsHudComponent;
  let fixture: ComponentFixture<PlaneStatsHudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneStatsHudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneStatsHudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
