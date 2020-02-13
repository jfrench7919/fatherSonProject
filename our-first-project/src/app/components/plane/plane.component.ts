import { Component, OnInit, Input } from '@angular/core';
import { Plane } from 'src/app/models/plane.model';

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.scss']
})
export class PlaneComponent implements OnInit {

  @Input() plane: Plane;
  
  constructor() { }

  ngOnInit() {
  }

}
