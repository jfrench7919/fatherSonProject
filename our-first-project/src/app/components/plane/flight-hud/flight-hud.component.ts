import { Component, OnInit, Input } from '@angular/core';
import { PlaneExtention, PlaneDecorator } from 'src/app/models/plane.model';
import { Store } from '@ngrx/store';
import * as fromShared from '../../../shared/store/reducers';

@Component({
  selector: 'app-flight-hud',
  templateUrl: './flight-hud.component.html',
  styleUrls: ['./flight-hud.component.scss']
})
export class FlightHudComponent implements OnInit {

  @Input() plane: PlaneExtention;

  constructor(private sharedStore: Store<fromShared.State>) { }

  ngOnInit() {
  }

  takeOffClick(): void {
    const planeDecorator: PlaneDecorator = new PlaneDecorator();
    planeDecorator.takeOff(this.plane);
  }

  landClick(): void {
    const planeDecorator: PlaneDecorator = new PlaneDecorator();
    planeDecorator.land(this.plane);
  }

}
