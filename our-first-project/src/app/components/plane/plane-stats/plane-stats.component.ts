import { Component, OnInit, Input } from '@angular/core';
import { Plane } from 'src/app/models/plane.mdel';

@Component({
  selector: 'app-plane-stats',
  templateUrl: './plane-stats.component.html',
  styleUrls: ['./plane-stats.component.scss']
})
export class PlaneStatsComponent implements OnInit {

  @Input() plane: Plane;

  constructor() { }

  ngOnInit() {
  }

}
