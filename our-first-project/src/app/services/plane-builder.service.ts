import { Injectable } from '@angular/core';
import { PlaneExtention } from '../models/plane.model';
import { Motor } from '../models/motor.model';
import { Gun } from '../models/gun.model';
import { Bomb } from '../models/bomb.model';

@Injectable({
  providedIn: 'root'
})
export class PlaneBuilderService {
  constructor() {
  }

  addMotors(plane: PlaneExtention, motor: Motor): PlaneExtention {
    plane.motors.push(motor);
    return plane;
  }

  addGuns(plane: PlaneExtention, gun: Gun): PlaneExtention {
    plane.guns.push(gun);
    return plane;
  }

  addBomb(plane: PlaneExtention, bomb: Bomb): PlaneExtention {
    plane.bombs.push(bomb);
    return plane;
  }

  getNewPlane(): PlaneExtention {
    return new PlaneExtention();
  }
}
