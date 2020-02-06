import { Component, OnInit, Input } from '@angular/core';
import { Plane } from 'src/app/models/plane.mdel';

@Component({
  selector: 'app-weapon-hud',
  templateUrl: './weapon-hud.component.html',
  styleUrls: ['./weapon-hud.component.scss']
})
export class WeaponHudComponent implements OnInit {

  @Input() plane: Plane;

  constructor() { }

  ngOnInit() {
  }

}
