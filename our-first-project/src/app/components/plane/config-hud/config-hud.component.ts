import { Component, OnInit, Input } from '@angular/core';
import { PlaneModel, PlaneExtention, PlaneConfigSystem } from 'src/app/models/plane.model';
import { Store } from '@ngrx/store';
import * as fromShared from '../../../shared/store/reducers';
import { Motor } from 'src/app/models/motor.model';
import { Bomb } from 'src/app/models/bomb.model';
import { Gun } from 'src/app/models/gun.model';

@Component({
  selector: 'app-config-hud',
  templateUrl: './config-hud.component.html',
  styleUrls: ['./config-hud.component.scss']
})
export class ConfigHudComponent implements OnInit {

  @Input() plane: PlaneExtention;

  constructor(private sharedStore: Store<fromShared.State>) { }

  ngOnInit() {
  }

  addMotorClick(): void {
    const planeConfigSystem: PlaneConfigSystem = new PlaneConfigSystem(this.sharedStore);
    planeConfigSystem.mountMotor(this.plane, new Motor());
  }

  addGunClick(): void {
    const planeConfigSystem: PlaneConfigSystem = new PlaneConfigSystem(this.sharedStore);
    planeConfigSystem.mountGun(this.plane, new Gun());
  }

  addBombClick(): void {
    const planeConfigSystem: PlaneConfigSystem = new PlaneConfigSystem(this.sharedStore);
    planeConfigSystem.mountBomb(this.plane, new Bomb());
  }

}
