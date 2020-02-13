import { Component, OnInit, Input } from '@angular/core';
import { BaseModel, IBase } from 'src/app/models/base.model';
import * as fromShared from '../../shared/store/reducers';
import { SelectedBaseActions } from '../../shared/store/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  @Input() base: BaseModel;

  constructor(private sharedStore: Store<fromShared.State>) { }

  ngOnInit() {
  }

  onBaseClick(clickedBase: BaseModel): void {
    console.log(clickedBase);
    this.sharedStore.dispatch(SelectedBaseActions.setSelectedBase({ enemyBase: clickedBase }));
  }

}
