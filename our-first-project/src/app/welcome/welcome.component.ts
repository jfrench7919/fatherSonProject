import { Component, OnInit } from '@angular/core';
import { PlaneBuilderService } from '../services/plane-builder.service';
import { BattleField } from '../models/battle-field.model';
import * as fromShared from '../shared/store/reducers';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SelectedBaseActions } from '../shared/store/actions';
import { BaseModel, BaseExtention, IBase } from '../models/base.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  selectedBase$: Observable<BaseModel>;
  selectedBase: BaseModel;

  battleField: BattleField;
  
  constructor(private planeService: PlaneBuilderService,
    private sharedStore: Store<fromShared.State>) { 
    this.battleField = new BattleField(planeService);
  }

  ngOnInit() {
    this.selectedBase$ = this.sharedStore.pipe(
      select(fromShared.getSelectedBase)
    );

    this.selectedBase$.subscribe(base => {
      this.selectedBase = base;
    });

    const b = new BaseExtention(49, 'Test');
    this.sharedStore.dispatch(SelectedBaseActions.setSelectedBase({ base: <BaseModel>b }));
  }

}
