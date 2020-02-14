import { Component, OnInit } from '@angular/core';
import { PlaneBuilderService } from '../services/plane-builder.service';
import { BattleField } from '../models/battle-field.model';
import * as fromShared from '../shared/store/reducers';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { BaseModel, BaseExtention, IBase } from '../models/base.model';
import { PlaneModel } from '../models/plane.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  bases$: Observable<BaseModel[]>;
  bases: BaseModel[];

  planes$: Observable<PlaneModel[]>;
  planes: PlaneModel[];

  battleField: BattleField;

  constructor(private planeService: PlaneBuilderService,
              private sharedStore: Store<fromShared.State>) {
    this.battleField = new BattleField(planeService, sharedStore);
  }

  ngOnInit() {
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

}
