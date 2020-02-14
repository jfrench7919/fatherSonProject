import { Component, OnInit, Input } from '@angular/core';
import { PlaneModel } from 'src/app/models/plane.model';

@Component({
  selector: 'app-config-hud',
  templateUrl: './config-hud.component.html',
  styleUrls: ['./config-hud.component.scss']
})
export class ConfigHudComponent implements OnInit {

  @Input() plane: PlaneModel;

  constructor() { }

  ngOnInit() {
  }

}
