import { Component, OnInit } from '@angular/core';
import {EMPTY, from, generate, interval, NEVER, observable, Observable, of, range, throwError, timer} from 'rxjs';
import {ObservabledDemoData} from './observable-demo-data';
import {CardType} from './card-type';
import {webSocket} from 'rxjs/webSocket';

@Component({
  selector: 'rxj-observers',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.sass']
})
export class ObservablesComponent implements OnInit {
  private data = [45, 1, 345, 0];
  demoData: ObservabledDemoData[];
  cardTypes = CardType;

  constructor() {
    this.demoData = [
      new ObservabledDemoData(CardType.OBSERVABLE, 'interval', 'values generated by timer', interval(1000)),
      new ObservabledDemoData(CardType.OBSERVABLE, 'timer', 'values generated by timer, but only after 5 seconds', timer(5000, 500)),

      new ObservabledDemoData(CardType.ARRAY, 'of', 'values from argument list', of(1, 6, 3, 345, -1)),
      new ObservabledDemoData(CardType.ARRAY, 'range', 'values from a range', range(100, 3)),
      new ObservabledDemoData(CardType.ARRAY, 'from', 'values from an dataAsArray-like object', from(this.data)),
      new ObservabledDemoData(CardType.ARRAY, 'generate', 'generates from op(initial, condition, iteration-step)',
        generate(10, x => x < 200, x => x * 2)
      ),

      new ObservabledDemoData(CardType.ARRAY, 'empty', 'emits no items and immediately completed', EMPTY),
      new ObservabledDemoData(CardType.ARRAY, 'never', 'never emits and never completed', NEVER),
      // new ObservabledDemoData(CardType.ARRAY, 'throwError', 'stream that fails without emitting a value.', throwError('error found')),

      new ObservabledDemoData(CardType.EVENT, 'Mouse events', 'do any mouse action in this card (+Alt/Ctrl button)'),

      // new ObservabledDemoData(CardType.OBSERVABLE, 'webSocket', 'listening on localhost:9999', webSocket('ws://localhost:9999')),
    ];
  }

  ngOnInit() {
  }
}
