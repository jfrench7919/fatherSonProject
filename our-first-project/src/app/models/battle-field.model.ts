import { Plane } from './plane.model';
import { BaseModel } from './base.model';
import { PlaneBuilderService } from '../services/plane-builder.service';

export class BattleField{
    planes: Plane[];
    bases: BaseModel[];

    constructor(private planeBuilderService: PlaneBuilderService){
        this.planes = [];
        this.bases = [];
    }

    public addBase(): void{
        this.bases.push(new BaseModel(40, 'Jonathan Land'));
    }

    public addPlane(): void{
        this.planes.push(this.planeBuilderService.getNewPlane());
    }
}