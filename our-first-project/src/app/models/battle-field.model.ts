import { PlaneModel } from './plane.model';
import { BaseModel, BaseExtention } from './base.model';
import { PlaneBuilderService } from '../services/plane-builder.service';
import { BaseActions, PlaneActions } from '../shared/store/actions';
import * as fromShared from '../shared/store/reducers';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

export class BattleField {
    planes: PlaneModel[];
    bases: BaseModel[];

    bases$: Observable<BaseModel[]>;
    planes$: Observable<PlaneModel[]>;

    constructor(private planeBuilderService: PlaneBuilderService,
                private sharedStore: Store<fromShared.State>){
        this.planes = [];
        this.bases = [];

        this.bases$ = this.sharedStore.pipe(
            select(fromShared.getBases)
        );

        this.planes$ = this.sharedStore.pipe(
            select(fromShared.getPlanes)
        );

        this.bases$.subscribe(bases => {
            this.bases = bases;
        });

        this.planes$.subscribe(planes => {
            this.planes = planes;
        });
    }

    public addBase(): void {
        this.bases.push(new BaseExtention(40, 'Jonathan Land'));
        this.sharedStore.dispatch(BaseActions.setBases({ bases: this.bases }));
    }

    public addPlane(): void {
        this.planes.push(this.planeBuilderService.getNewPlane());
        this.sharedStore.dispatch(PlaneActions.setPlanes({ planes: this.planes }));
    }
}