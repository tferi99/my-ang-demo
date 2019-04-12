import {Component, OnInit} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {map, mergeMap, take, tap} from 'rxjs/operators';
import {log, RxJsLoggingLevel, setRxJsLoggingLevel} from '../../shared/util/log';

@Component({
  selector: 'rxj-log-test',
  templateUrl: './log-test.component.html',
  styleUrls: ['./log-test.component.sass']
})
export class LogTestComponent implements OnInit {
  values$: Observable<number>;

  constructor() {
    const o1 = interval(300).pipe(
      map(x => String.fromCharCode(65 + x)),
      take(3),
      log(RxJsLoggingLevel.DEBUG, 'o2')
    );

    const o2 = interval(1000).pipe(
      map(x => x + 1),
      take(3),
      log(RxJsLoggingLevel.INFO, 'o1')
    );

    const o3 = o1.pipe(mergeMap(() => o2, (x, y) => '' + x + y, 2)).subscribe(x => console.log('RESULT >>>>> ' + x));
  }

  ngOnInit(): void {
  }
}
