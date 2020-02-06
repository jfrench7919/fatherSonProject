import { Component, OnInit, Input } from '@angular/core';
import { Plane } from 'src/app/models/plane.mdel';

@Component({
  selector: 'app-motor-hud',
  templateUrl: './motor-hud.component.html',
  styleUrls: ['./motor-hud.component.scss']
})
export class MotorHudComponent implements OnInit {

  @Input() plane: Plane;

  constructor() { }

  ngOnInit() {
  }

}
