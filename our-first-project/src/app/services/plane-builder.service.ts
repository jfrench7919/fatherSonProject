import { Injectable } from '@angular/core';
import { Plane } from '../models/plane.mdel';
import { Motor } from '../models/motor.model';

@Injectable({
  providedIn: 'root'
})
export class PlaneBuilderService {
  myPlane: Plane;
  constructor() { 
  }

  buildPlane(){
    this.myPlane = new Plane();
  }

  addMotors(): Plane{
    this.myPlane.motors = [];
    this.myPlane.motors.push(new Motor());
    this.myPlane.motors.push(new Motor());
    return this.myPlane;
  }
}
