import { Plane } from './plane.mdel';
import { Base } from './base.model';
import { PlaneBuilderService } from '../services/plane-builder.service';

export class BattleField{
    planes: Plane[];
    bases: Base[];

    constructor(private planeBuilderService: PlaneBuilderService){
        this.planes = [];
        this.bases = [];
    }

    public addBase(): void{
        this.bases.push(new Base(40, 'Jonathan Land'));
    }

    public addPlane(): void{
        this.planes.push(this.planeBuilderService.getNewPlane());
    }
}