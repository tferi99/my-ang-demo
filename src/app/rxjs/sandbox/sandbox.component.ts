import {Component, OnInit} from '@angular/core';
import {Observable, range} from 'rxjs';
import {filter, map, take} from 'rxjs/operators';
import {log, RxJsLoggingLevel} from '../../shared/util/log';

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
    range(20, 50).pipe(
      log(RxJsLoggingLevel.INFO, 'RANGE'),
      filter(x => (x % 2) !== 0),
      log(RxJsLoggingLevel.INFO, 'FILTER'),
      map(x => x * x),
      log(RxJsLoggingLevel.INFO, 'MAP'),
      take(3),
      log(RxJsLoggingLevel.INFO, 'TAKE'),
    ).subscribe(console.log);

/*    const o1 = interval(300).pipe(
      map(x => String.fromCharCode(65 + x)),
      take(3),
      log(RxJsLoggingLevel.DEBUG, 'o2')
    );

    const o2 = interval(1000).pipe(
      map(x => x + 1),
      take(3),
      log(RxJsLoggingLevel.INFO, 'o1')
    );

    const o3 = o1.pipe(mergeMap(() => o2, (x, y) => '' + x + y, 2)).subscribe(x => console.log('============= ' + x));*/
  }
}
