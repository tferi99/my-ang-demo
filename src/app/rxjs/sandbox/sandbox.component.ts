import {Component, OnInit} from '@angular/core';
import {interval, Observable, range, Subscription} from 'rxjs';
import {filter, map, take} from 'rxjs/operators';
import {rxJsLog, RxJsLoggingLevel} from '../../shared/util/rxJsLog';
import {ApiStoreService} from '../../core/api-store.service';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'rxj-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.sass']
})
export class SandboxComponent implements OnInit {
  obs$: Observable<number>;
  subscription: Subscription;

  constructor(private log: NGXLogger) {}

  ngOnInit() {
    /*    this.obs$ = range(100, 3);
        this.obs$.subscribe(this.log.debug);*/

    /*    range(20, 50).pipe(
          rxJsLog(RxJsLoggingLevel.INFO, 'RANGE'),
          filter(x => (x % 2) !== 0),
          rxJsLog(RxJsLoggingLevel.INFO, 'FILTER'),
          map(x => x * x),
          rxJsLog(RxJsLoggingLevel.INFO, 'MAP'),
          take(3),
          rxJsLog(RxJsLoggingLevel.INFO, 'TAKE'),
        ).subscribe(this.log.debug;*/

    /*    const o1 = interval(300).pipe(
          map(x => String.fromCharCode(65 + x)),
          take(3),
          rxJsLog(RxJsLoggingLevel.DEBUG, 'o2')
        );

        const o2 = interval(1000).pipe(
          map(x => x + 1),
          take(3),
          rxJsLog(RxJsLoggingLevel.INFO, 'o1')
        );

        const o3 = o1.pipe(mergeMap(() => o2, (x, y) => '' + x + y, 2)).subscribe(x => this.log.debug('============= ' + x));*/

    this.obs$ = interval(1000).pipe(
      take(5)
    );
  }

  onClick() {
    this.log.debug('click');

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.obs$.subscribe(
      this.log.info,
      this.log.error,
      () => this.log.debug('COMPLETED')
      );
  }
}
