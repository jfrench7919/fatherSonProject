import { Component, OnInit, Input } from '@angular/core';
import { BaseModel } from 'src/app/models/base.model';
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

  onBaseClick(base: BaseModel): void{
    alert('Test');
    this.sharedStore.dispatch(SelectedBaseActions.setSelectedBase({ base: base }));
  }

}
