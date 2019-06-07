import {Component, OnInit} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {map, mergeMap, take, tap} from 'rxjs/operators';
import {rxJsLog, RxJsLoggingLevel, setRxJsLoggingLevel} from '../../shared/util/rxJsLog';
import {ApiStoreService} from '../../core/api-store.service';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'rxj-log-test',
  templateUrl: './log-test.component.html',
  styleUrls: ['./log-test.component.sass']
})
export class LogTestComponent implements OnInit {
  values$: Observable<number>;

  constructor(private log: NGXLogger) {}

  ngOnInit(): void {
    // A, B, C, D, ...
    const o1 = interval(300).pipe(
      map(x => String.fromCharCode(65 + x)),
      take(3),
      rxJsLog(this.log, RxJsLoggingLevel.DEBUG, 'o2')
    );

    // 0, 1, 2, 3, 4, 5, ...
    const o2 = interval(1000).pipe(
      map(x => x + 1),
      take(3),
      rxJsLog(this.log, RxJsLoggingLevel.INFO, 'o1')
    );

    const o3 = o1.pipe(mergeMap(() => o2, (x, y) => '' + x + y, 2)).subscribe(x => this.log.debug('RESULT >>>>> ' + x));
  }
}

