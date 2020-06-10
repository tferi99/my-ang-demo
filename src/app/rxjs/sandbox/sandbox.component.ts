import {Component, OnInit} from '@angular/core';
import {interval, Observable, Subject, Subscription, range} from 'rxjs';
import {filter, map, take, mergeMap} from 'rxjs/operators';
import {NGXLogger} from 'ngx-logger';
import {rxJsLog, RxJsLoggingLevel} from '../../shared/util/rxJsLog';

@Component({
  selector: 'rxj-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.sass']
})
export class SandboxComponent implements OnInit {
  obs$: Observable<number>;
  subscription: Subscription;

  constructor(private log: NGXLogger) {}

  private playObservable(id: string, o: Observable<any>) {
    o.subscribe(
      v => console.log(`DATA[${id}]:`, v),
      err => console.error(`ERROR[${id}]:`, err),
      () => console.log(`COMPLETED[${id}]`)
    );
  }

    handmade() {
      const o = new Observable(observer => {
        observer.next(1);
        observer.next(1000);
        observer.next(3000);
        observer.complete();
      });
      this.playObservable('handmade', o);
    }

  /**
   * - Range 20-50
   * - get on even
   * - get square
   * - take the first 3
   */
  range() {
    const o = range(20, 50).pipe(
      rxJsLog(this.log, RxJsLoggingLevel.INFO, 'RANGE' ),
      filter(x => (x % 2) !== 0),
      rxJsLog(this.log, RxJsLoggingLevel.INFO, 'FILTER'),
      map(x => x * x),
      rxJsLog(this.log, RxJsLoggingLevel.INFO, 'MAP'),
      take(3),
      rxJsLog(this.log, RxJsLoggingLevel.INFO, 'TAKE'),
    );
    this.playObservable('range', o);
  }

  mergeMap() {
    const o1 = interval(300).pipe(
      map(x => String.fromCharCode(65 + x)),
      take(3),
      rxJsLog(this.log, RxJsLoggingLevel.DEBUG, 'incrementChar')
    );

    const o2 = interval(1000).pipe(
      map(x => x + 1),
      take(3),
      rxJsLog(this.log, RxJsLoggingLevel.INFO, 'incrementNum')
    );

    const o3 = o1.pipe(mergeMap(() => o2, (x, y) => '' + x + y, 2));

    this.playObservable('mergeMap', o3);
  }

  multiSubs() {
    const o = interval(1000).pipe(take(3));
    this.playObservable('multiSubs-1', o);
    this.playObservable('multiSubs-2', o);
    this.playObservable('multiSubs-3', o);
  }

  ngOnInit() {}
}
