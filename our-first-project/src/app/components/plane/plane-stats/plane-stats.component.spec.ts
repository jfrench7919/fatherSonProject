import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneStatsComponent } from './plane-stats.component';

describe('PlaneStatsComponent', () => {
  let component: PlaneStatsComponent;
  let fixture: ComponentFixture<PlaneStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
