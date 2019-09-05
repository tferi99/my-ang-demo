import { Component, OnInit } from '@angular/core';
import {Skill} from '../skill.model';

@Component({
  selector: 'chd-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  skills = [ new Skill(1, 'JS'), new Skill(2, 'CSS'), new Skill(3, 'Angular') ];

  constructor() { }

  ngOnInit() {
  }

  trigger() {}
}


