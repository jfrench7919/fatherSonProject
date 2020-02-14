import { Component, OnInit, Input } from '@angular/core';
import { PlaneModel } from 'src/app/models/plane.model';

@Component({
  selector: 'app-motor-hud',
  templateUrl: './motor-hud.component.html',
  styleUrls: ['./motor-hud.component.scss']
})
export class MotorHudComponent implements OnInit {

  @Input() plane: PlaneModel;

  constructor() { }

  ngOnInit() {
  }

}
