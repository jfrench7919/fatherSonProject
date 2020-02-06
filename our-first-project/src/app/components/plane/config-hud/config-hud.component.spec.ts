import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigHudComponent } from './config-hud.component';

describe('ConfigHudComponent', () => {
  let component: ConfigHudComponent;
  let fixture: ComponentFixture<ConfigHudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigHudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigHudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
