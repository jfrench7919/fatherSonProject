import { Component, OnInit, Input } from '@angular/core';
import { PlaneExtention } from 'src/app/models/plane.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { BaseExtention, BaseDecorator } from '../../../models/base.model';
import * as fromShared from '../../../shared/store/reducers';

@Component({
  selector: 'app-weapon-hud',
  templateUrl: './weapon-hud.component.html',
  styleUrls: ['./weapon-hud.component.scss']
})
export class WeaponHudComponent implements OnInit {

  @Input() plane: PlaneExtention;

  selectedBase$: Observable<BaseExtention[]>;
  selectedBase: BaseExtention[];
  baseDecorator: BaseDecorator = new BaseDecorator();

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
   foundBase.damage = foundBase.damage + (this.plane.guns.length * 60);
  }

  launchBomb(): void {
    const foundBase = this.selectedBase.find(b => b.selected === true);
    this.plane.bombs.pop();
    this.baseDecorator.recieveDamage(foundBase, 500);
   }
}
