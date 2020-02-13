import { Component, OnInit, Input } from '@angular/core';
import { BaseModel } from 'src/app/models/base.model';

@Component({
  selector: 'app-base-stats',
  templateUrl: './base-stats.component.html',
  styleUrls: ['./base-stats.component.scss']
})
export class BaseStatsComponent implements OnInit {

  @Input() base: BaseModel;
  
  constructor() { }

  ngOnInit() {
  }

}
