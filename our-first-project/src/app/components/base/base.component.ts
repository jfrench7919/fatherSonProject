import { Component, OnInit, Input } from '@angular/core';
import { Base } from 'src/app/models/base.model';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  @Input() base: Base;

  constructor() { }

  ngOnInit() {
  }

}
