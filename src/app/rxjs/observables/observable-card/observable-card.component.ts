import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {ObservabledDemoData} from '../observable-demo-data';

@Component({
  selector: 'rxj-observable-card',
  templateUrl: './observable-card.component.html',
  styleUrls: ['./observable-card.component.sass']
})
export class ObservableCardComponent implements OnInit {
  @Input() data: ObservabledDemoData;

  constructor() { }

  ngOnInit() {
  }
}
