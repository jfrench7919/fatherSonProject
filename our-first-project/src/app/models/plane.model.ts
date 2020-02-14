import { Motor } from './motor.model';
import { Gun } from './gun.model';
import { Bomb } from './bomb.model';
import { BaseModel } from './base.model';

export interface IPlane {
    planeType: string;
    altitude: number;
    motorsRunning: boolean;
    isFlying: boolean;

    motors: Motor[];
    guns: Gun[];
    bombs: Bomb[];
}

export class PlaneModel implements IPlane {
    planeType: string;
    altitude: number;
    motorsRunning: boolean;
    isFlying: boolean;

    motors: Motor[];
    guns: Gun[];
    bombs: Bomb[];
}


export class PlaneExtention implements PlaneModel {
    planeType: string;
    altitude: number;
    motorsRunning: boolean;

    motors: Motor[];
    guns: Gun[];
    bombs: Bomb[];

    constructor() {
        this.motors = [];
        this.guns = [];
        this.bombs = [];
        this.altitude = 0;
        this.motorsRunning = false;
    }

    get isFlying(): boolean {
        return this.altitude > 0;
    }
}

export class PlaneDecorator {
    takeOff(plane: PlaneExtention) {
        if (plane.motorsRunning) {
            plane.altitude = 2000;
        } else {
            alert('Plane not started');
        }

    }

    land(plane: PlaneExtention) {
        if (plane.isFlying) {
            plane.altitude = 0;
        } else {
            alert('This plane is on the ground');
        }
    }

    startMotors(plane: PlaneExtention) {
        if (plane.motorsRunning) {
            alert('Plane is already started');
        } else {
            plane.motorsRunning = true;
        }
    }

    stopMotors(plane: PlaneExtention) {
        if (plane.motorsRunning) {
            plane.motorsRunning = false;
        } else {
            alert('Plane is not started');
        }
    }
}

export class PlaneWeponsSystem {

    mountBomb(plane: PlaneExtention, target: BaseModel) {

    }

    dropBomb(plane: PlaneExtention, target: BaseModel) {

    }

    mountGuns(plane: PlaneExtention, target: BaseModel) {

    }

    shootGun(plane: PlaneExtention, target: BaseModel) {

    }
}
