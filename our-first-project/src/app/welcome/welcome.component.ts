import { Component, OnInit } from '@angular/core';
import {Plane} from '../models/plane.mdel';
import { PlaneBuilderService } from '../services/plane-builder.service';
import { BattleField } from '../models/battle-field.model';
import { Base } from '../models/base.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  battleField: BattleField;
  
  constructor(private planeService: PlaneBuilderService) { 
    this.battleField = new BattleField(planeService);
  }

  ngOnInit() {
    
  }

}
