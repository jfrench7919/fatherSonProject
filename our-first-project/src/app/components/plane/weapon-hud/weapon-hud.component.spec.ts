import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponHudComponent } from './weapon-hud.component';

describe('WeaponHudComponent', () => {
  let component: WeaponHudComponent;
  let fixture: ComponentFixture<WeaponHudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponHudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponHudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
