import { Injectable } from '@angular/core';
import { Plane } from '../models/plane.model';
import { Motor } from '../models/motor.model';
import { Gun } from '../models/gun.model';
import { Bomb } from '../models/bomb.model';

@Injectable({
  providedIn: 'root'
})
export class PlaneBuilderService {
  constructor() { 
  }

  addMotors(plane: Plane, motor: Motor): Plane{
    plane.motors.push(motor);
    return plane;
  }

  addGuns(plane: Plane, gun: Gun): Plane{
    plane.guns.push(gun);
    return plane;
  }

  addBomb(plane: Plane, bomb: Bomb): Plane{
    plane.bombs.push(bomb);
    return plane;
  }

  getNewPlane(): Plane{
    return new Plane();
  }
}
