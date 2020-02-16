import { Motor } from './motor.model';
import { Gun } from './gun.model';
import { Bomb } from './bomb.model';
import { BaseModel } from './base.model';
import { Store, select } from '@ngrx/store';
import * as fromShared from '../shared/store/reducers';
import { Observable } from 'rxjs';
import { PlaneActions } from '../shared/store/actions';

export interface IPlane {
    planeType: string;
    altitude: number;
    motorsRunning: boolean;
    isFlying: boolean;

    motors: Motor[];
    motorMax: number;
    guns: Gun[];
    gunMax: number;
    bombs: Bomb[];
    bombMax: number;
}

export class PlaneModel implements IPlane {
    planeType: string;
    altitude: number;
    motorsRunning: boolean;
    isFlying: boolean;

    motors: Motor[];
    motorMax: number;
    guns: Gun[];
    gunMax: number;
    bombs: Bomb[];
    bombMax: number;
}


export class PlaneExtention implements PlaneModel {
    planeType: string;
    altitude: number;
    motorsRunning: boolean;

    motors: Motor[];
    motorMax: number;
    guns: Gun[];
    gunMax: number;
    bombs: Bomb[];
    bombMax: number;

    constructor() {
        this.motors = [];
        this.motorMax = 4;
        this.guns = [];
        this.gunMax = 4;
        this.bombs = [];
        this.bombMax = 8;
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

    dropBomb(plane: PlaneExtention, target: BaseModel) {

    }

    shootGun(plane: PlaneExtention, target: BaseModel) {

    }
}

export class PlaneConfigSystem {
    planes$: Observable<PlaneModel[]>;
    planes: PlaneExtention[];

    constructor(private sharedStore: Store<fromShared.State>){
        this.planes$ = this.sharedStore.pipe(
            select(fromShared.getPlanes)
        );
    
        this.planes$.subscribe(planes => {
            this.planes = planes;
        });
    }

    mountMotor(plane: PlaneExtention, motor: Motor) {
        if (plane.motors.length < plane.motorMax){
            plane.motors.push(motor);
        }
        else{
            alert('Max motors already reached')
        }
    }

    mountBomb(plane: PlaneExtention, bomb: Bomb) {
        if (plane.bombs.length < plane.bombMax){
            plane.bombs.push(bomb);
        }
        else{
            alert('Max bombs already reached')
        }
    }

    mountGun(plane: PlaneExtention, gun: Gun) {
        if (plane.guns.length < plane.gunMax){
            plane.guns.push(gun);
        }
        else{
            alert('Max guns already reached')
        }
    }
}

export class PlaneMotorSystem {
    startMotor(plane: PlaneExtention) {
        plane.motorsRunning = true;
    }

    stopMotor(plane: PlaneExtention) {
        plane.motorsRunning = false;   
    }
}