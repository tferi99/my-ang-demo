import {Component, OnInit} from '@angular/core';
import {Observable, range} from 'rxjs';

@Component({
  selector: 'rxj-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.sass']
})
export class SandboxComponent implements OnInit {
  values$: Observable<number>;

  constructor() {
    this.values$ = range(100, 3);
    this.values$.subscribe(console.log);
  }

  ngOnInit() {}
}
