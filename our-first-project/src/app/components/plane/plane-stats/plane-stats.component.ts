import { Component, OnInit, Input } from '@angular/core';
import { PlaneModel } from 'src/app/models/plane.model';

@Component({
  selector: 'app-plane-stats',
  templateUrl: './plane-stats.component.html',
  styleUrls: ['./plane-stats.component.scss']
})
export class PlaneStatsComponent implements OnInit {

  @Input() plane: PlaneModel;

  constructor() { }

  ngOnInit() {
  }

}
