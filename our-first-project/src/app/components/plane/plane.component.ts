import { Component, OnInit, Input } from '@angular/core';
import { PlaneModel } from 'src/app/models/plane.model';

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.scss']
})
export class PlaneComponent implements OnInit {

  @Input() plane: PlaneModel;
  hudButtonName: string;

  constructor() { }

  ngOnInit() {
    this.hudButtonName = "Display Hud";
  }

  changeHudButton():void {
    if (this.hudButtonName === "Display Hud"){
      this.hudButtonName = "Close Hud";
    }
    else{
      this.hudButtonName = "Display Hud";
    }
  }

}
