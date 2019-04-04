import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ObservabledDemoData} from '../observable-demo-data';

@Component({
  selector: 'rxj-array-card',
  templateUrl: './array-card.component.html',
  styleUrls: ['./array-card.component.sass']
})
export class ArrayCardComponent implements OnInit {
  @Input() data: ObservabledDemoData

  constructor() { }

  ngOnInit() {
  }
}
