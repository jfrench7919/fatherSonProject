import { Component, OnInit, Input } from '@angular/core';
import { Plane } from 'src/app/models/plane.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SelectedBaseActions } from '../../../shared/store/actions';
import { BaseModel, BaseExtention, IBase } from '../../../models/base.model';
import * as fromShared from '../../../shared/store/reducers';

@Component({
  selector: 'app-weapon-hud',
  templateUrl: './weapon-hud.component.html',
  styleUrls: ['./weapon-hud.component.scss']
})
export class WeaponHudComponent implements OnInit {

  @Input() plane: Plane;

  selectedBase$: Observable<BaseExtention>;
  selectedBase: BaseExtention;

  constructor(private sharedStore: Store<fromShared.State>) { }

  ngOnInit() {
    this.selectedBase$ = this.sharedStore.pipe(
      select(fromShared.getSelectedBase)
    );

    this.selectedBase$.subscribe(base => {
      this.selectedBase = base;
    });
  }

  fireGun(): void {
    this.selectedBase.damage = this.selectedBase.damage + 60;
  }
}
