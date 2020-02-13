import { Component, OnInit, Input } from '@angular/core';
import { Plane } from 'src/app/models/plane.model';

@Component({
  selector: 'app-flight-hud',
  templateUrl: './flight-hud.component.html',
  styleUrls: ['./flight-hud.component.scss']
})
export class FlightHudComponent implements OnInit {

  @Input() plane: Plane;

  constructor() { }

  ngOnInit() {
  }

}
