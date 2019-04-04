import { Component, OnInit } from '@angular/core';
import {interval, range} from 'rxjs';

@Component({
  selector: 'rxj-observers',
  templateUrl: './observers.component.html',
  styleUrls: ['./observers.component.sass']
})
export class ObserversComponent implements OnInit {
  counter$ = interval(1000);
  rangeArr: Array<number> = [];

  numbers1$ = range(100, 3).subscribe(v => this.rangeArr.push(v));

  constructor() { }

  ngOnInit() {
  }

}
