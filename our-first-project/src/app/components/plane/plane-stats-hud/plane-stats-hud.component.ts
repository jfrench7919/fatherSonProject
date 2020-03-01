import { Component, OnInit, Input } from '@angular/core';
import { PlaneModel } from 'src/app/models/plane.model';

@Component({
  selector: 'app-plane-stats-hud',
  templateUrl: './plane-stats-hud.component.html',
  styleUrls: ['./plane-stats-hud.component.scss']
})
export class PlaneStatsHudComponent implements OnInit {

  @Input() plane: PlaneModel;

  constructor() { }

  ngOnInit() {
  }

}
