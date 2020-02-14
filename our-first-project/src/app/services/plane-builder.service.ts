import { Injectable } from '@angular/core';
import { PlaneModel } from '../models/plane.model';
import { Motor } from '../models/motor.model';
import { Gun } from '../models/gun.model';
import { Bomb } from '../models/bomb.model';

@Injectable({
  providedIn: 'root'
})
export class PlaneBuilderService {
  constructor() {
  }

  addMotors(plane: PlaneModel, motor: Motor): PlaneModel{
    plane.motors.push(motor);
    return plane;
  }

  addGuns(plane: PlaneModel, gun: Gun): PlaneModel{
    plane.guns.push(gun);
    return plane;
  }

  addBomb(plane: PlaneModel, bomb: Bomb): PlaneModel{
    plane.bombs.push(bomb);
    return plane;
  }

  getNewPlane(): PlaneModel{
    return new PlaneModel();
  }
}
