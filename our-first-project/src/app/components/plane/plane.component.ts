import { Component, OnInit, Input } from '@angular/core';
import { PlaneModel } from 'src/app/models/plane.model';

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.scss']
})
export class PlaneComponent implements OnInit {

  @Input() plane: PlaneModel;

  constructor() { }

  ngOnInit() {
  }

}
