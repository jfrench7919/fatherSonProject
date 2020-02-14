import { Component, OnInit, Input } from '@angular/core';
import { BaseModel, IBase } from 'src/app/models/base.model';
import * as fromShared from '../../shared/store/reducers';
import { BaseActions } from '../../shared/store/actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  @Input() base: BaseModel;

  bases$: Observable<BaseModel[]>;
  bases: BaseModel[];

  constructor(private sharedStore: Store<fromShared.State>) { }

  ngOnInit() {
    this.bases$ = this.sharedStore.pipe(
      select(fromShared.getBases)
    );

    this.bases$.subscribe(bases => {
      this.bases = bases;
    });
  }

  onBaseClick(clickedBase: BaseModel): void {
    this.bases.forEach( b => {
      if (b.selected) {
        b.selected = false;
      }
    });

    clickedBase.selected = true;
    this.sharedStore.dispatch(BaseActions.setBases({ bases: this.bases }));
  }

}
