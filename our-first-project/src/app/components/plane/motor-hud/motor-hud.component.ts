import { Component, OnInit, Input } from '@angular/core';
import { PlaneExtention, PlaneConfigSystem, PlaneMotorSystem } from 'src/app/models/plane.model';
import { Store } from '@ngrx/store';
import * as fromShared from '../../../shared/store/reducers';

@Component({
  selector: 'app-motor-hud',
  templateUrl: './motor-hud.component.html',
  styleUrls: ['./motor-hud.component.scss']
})
export class MotorHudComponent implements OnInit {

  @Input() plane: PlaneExtention;

  constructor(private sharedStore: Store<fromShared.State>) { }

  ngOnInit() {
  }

  startMotorClick(): void {
    const planeMotorSystem: PlaneMotorSystem = new PlaneMotorSystem();
    planeMotorSystem.startMotor(this.plane);
  }

  stopMotorClick(): void {
    const planeMotorSystem: PlaneMotorSystem = new PlaneMotorSystem();
    planeMotorSystem.stopMotor(this.plane);
  }

}
