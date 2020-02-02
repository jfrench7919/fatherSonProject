import { Component, OnInit } from '@angular/core';
import {Plane} from '../models/plane.mdel';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  plane: Plane;
  planes: Plane[];

  constructor() { }

  ngOnInit() {
  }

}
