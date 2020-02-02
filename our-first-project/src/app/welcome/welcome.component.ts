import { Component, OnInit } from '@angular/core';
import {Plane} from '../models/plane.mdel';
import { PlaneBuilderService } from '../services/plane-builder.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  plane: Plane;
  planes: Plane[];
  

  constructor(private planeService: PlaneBuilderService) { }

  ngOnInit() {
    this.planeService.buildPlane();
    this.plane = this.planeService.addMotors();
  }

}
