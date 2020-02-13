import { Motor } from './motor.model';
import { Gun } from './gun.model';
import { Bomb } from './bomb.model';
import { BaseModel } from './base.model';

export class Plane{
    planeType: string;
    
    motors: Motor[];
    guns: Gun[];
    bombs: Bomb[];

    altitude: Number;
    motorsRunning: boolean;

    public get isFlying() : boolean {
        return this.altitude > 0;
    }

    constructor(){
        this.motors = [];
        this.guns = [];
        this.bombs = [];
        this.altitude = 0;
        this.motorsRunning = false;
    }

    dropBomb(base: BaseModel){

    }

    shootGun(base: BaseModel){

    }

    fly(){

    }

    takeOff(){
        if (this.motorsRunning){
            this.altitude = 2000;
        }
        else{
            alert('Plane not started');
        }

    }

    land(){
        if (this.isFlying){
            this.altitude = 0;
        }
        else{
            alert('This plane is on the ground');
        }
    }

    startMotors(){
        if (this.motorsRunning){
            alert('Plane is already started');
        }
        else{
            this.motorsRunning = true;
        }
    }

    stopMotors(){
        if (this.motorsRunning){
            this.motorsRunning = false;
        }
        else{
            alert('Plane is not started');
        }
    }

}