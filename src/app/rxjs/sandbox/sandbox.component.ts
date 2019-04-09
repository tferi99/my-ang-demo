import {Component, OnInit} from '@angular/core';
import {interval, Observable, pipe, range, timer} from 'rxjs';
import {delayWhen, filter, map, mergeMap, take, tap} from 'rxjs/operators';

@Component({
  selector: 'rxj-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.sass']
})
export class SandboxComponent implements OnInit {
  values$: Observable<number>;

  constructor() {
/*    this.values$ = range(100, 3);
    this.values$.subscribe(console.log);*/
  }

  ngOnInit() {
/*    range(20, 50).pipe(
      filter(x => (x % 2) !== 0),
      map(x => x * x),
      take(3)
    ).subscribe(console.log);*/

    const o1 = interval(300).pipe(
      map(x => String.fromCharCode(65 + x)),
      take(3),
      tap(x => console.log('o2: ' + x))
    );

    const o2 = interval(1000).pipe(
      map(x => x + 1),
      take(3),
      tap(x => console.log('o1: ' + x))
    );

    const o3 = o1.pipe(mergeMap(() => o2, (x, y) => '' + x + y, 2)).subscribe(x => console.log('============= ' + x));
  }
}
