import { Component, OnInit, Input } from '@angular/core';
import { PlaneModel } from 'src/app/models/plane.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { BaseExtention } from '../../../models/base.model';
import * as fromShared from '../../../shared/store/reducers';

@Component({
  selector: 'app-weapon-hud',
  templateUrl: './weapon-hud.component.html',
  styleUrls: ['./weapon-hud.component.scss']
})
export class WeaponHudComponent implements OnInit {

  @Input() plane: PlaneModel;

  selectedBase$: Observable<BaseExtention[]>;
  selectedBase: BaseExtention[];

  constructor(private sharedStore: Store<fromShared.State>) { }

  ngOnInit() {
    this.selectedBase$ = this.sharedStore.pipe(
      select(fromShared.getBases)
    );

    this.selectedBase$.subscribe(base => {
      this.selectedBase = base;
    });
  }

  fireGun(): void {
   const foundBase = this.selectedBase.find(b => b.selected === true);
   foundBase.damage = foundBase.damage + 60;
  }
}
