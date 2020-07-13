import {AfterViewInit, Component, OnInit} from '@angular/core';
import {from, interval, Observable, of, throwError, timer} from 'rxjs';
import {Course} from '../../shared/model/course.model';
import {ApiService} from '../../core/service/api.service';
import {catchError, delayWhen, finalize, mergeMap, retry, retryWhen, tap} from 'rxjs/operators';
import {rxJsLog, RxJsLoggingLevel} from '../../shared/util/rxJsLog';
import {NGXLogger} from 'ngx-logger';
import {getGroup, watch} from 'rxjs-watcher/dist';
import {genericRetryStrategy} from './generic-retry-strategy';

@Component({
  selector: 'rxj-error-test',
  templateUrl: './error-test.component.html',
  styleUrls: ['./error-test.component.scss']
})
export class ErrorTestComponent implements OnInit, AfterViewInit {
  courses$: Observable<Course[]>;
  errorFound = false;
  alternativeCourse: Course = {id: -1, description: 'Error on server. Till problem solved read this:', alternativeCourseTitle: 'Index', alternativeCourseUrl: 'https://index.hu'};

  WATCH_SECS = 3;

  constructor(private api: ApiService, private log: NGXLogger) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
  }


  // ------------------------- handling error in error callback -----------------------------
  loadCourses0(): void {
    this.api.getCoursesWithRandomErr().pipe(
      watch('input', this.WATCH_SECS),
      rxJsLog(this.log, RxJsLoggingLevel.DEBUG, 'courses-0'),
    ).subscribe(
      x => {
        this.log.debug('HTTP RESPONSE', x);
        this.courses$ = of(x);                    // because here we subscribe manually and not by async pipe
      },
     err => {
        this.showError('HTTP ERROR', err);
        this.courses$ = of([this.alternativeCourse]);
      },
     () => {
       this.errorFound = false;
       this.log.debug('COMPLETED');
     }
    );
  }

  // ------------------------- Catch and Replace Strategy -----------------------------
  loadCoursesWithReplace(): void {
    this.errorFound = false;
    this.courses$ = this.api.getCoursesWithRandomErr().pipe(
      watch('input', this.WATCH_SECS),
      rxJsLog(this.log, RxJsLoggingLevel.DEBUG, 'loadCoursesWithReplace'),
      catchError(err => {
        this.showError('loadCoursesWithReplace', err);
        return of([this.alternativeCourse]);           // returning an alternative Observable on error
      }),
      watch('output', this.WATCH_SECS),
    );
  }

  // ------------------------- Rethrow Strategy -----------------------------
  loadCoursesWithRethrow(): void {
    this.errorFound = false;
    this.courses$ = this.api.getCoursesWithRandomErr().pipe(
      watch('input', this.WATCH_SECS),
      rxJsLog(this.log, RxJsLoggingLevel.DEBUG, 'loadCoursesWithRethrow'),
      catchError(err => {
        this.showError('loadCoursesWithRethrow', err);
        return throwError(err);                   // returning an error Observable on error
      }),
      watch('output', this.WATCH_SECS),
    );
  }

  // ------------------------- Error Cleanup -----------------------------
  loadCoursesWithCleanup(): void {
    this.errorFound = false;
    this.courses$ = this.api.getCoursesWithRandomErr().pipe(
      watch('error 0', this.WATCH_SECS),
      rxJsLog(this.log, RxJsLoggingLevel.DEBUG, 'loadCoursesWithCleanup'),
      catchError(err => {                   // you can catch error immediately in the 1st operator, or everywhere error can generated
        this.showError('loadCoursesWithCleanup', err);
        return throwError(err);                   // returning an error Observable on error
      }),
      finalize(() => {
        // SOME CLEANUP LOGIC
        this.log.debug('Error handled with cleanup.');
      })
    );
  }

  // ------------------------- Retry -----------------------------
  loadCoursesWithDelayRetryInterval(): void {
    const innerWatch = getGroup('Inner');

    interval(500).pipe(
      watch('input', 15),
      mergeMap(val => {                      // on vaklue 6 original observable will be replaced with an error observable
        if (val >= 5) {
          return throwError('Error!');         // it's an error observable (never emits - only throws)
        }
        return of(val);
      }),
      // on error it retries twice IMMEDIATELY (re-subscribe source observable 2x)
      retry(2),                               // Returns an Observable that mirrors the source Observable with the exception of an `error`.
      watch('output', 15),
    ).subscribe(
      val => {},
      val => console.log(`${val}: Retried 2 times then quit!`)
    );
  }


  loadCoursesWithDelayRetry(): void {
    this.errorFound = false;
    const retryInterval = 2000;
    this.courses$ = this.api.getCoursesWithRandomErr().pipe(
      watch('error 0', this.WATCH_SECS),
      rxJsLog(this.log, RxJsLoggingLevel.DEBUG, 'loadCoursesWithDelayRetry'),
      retryWhen(errors => errors.pipe(
        tap(err => this.log.debug(`Error found -> retry in ${retryInterval} msecs`, err)),      // rxJsLog error errorMessage
        delayWhen((val, index) => timer(val * retryInterval))   // restart in 2 seconds
      ))
    );
  }

  loadCoursesWithRetryStrategy(): void {
    const retryInterval = 2000;
    this.courses$ = this.api.getCoursesWithRandomErr().pipe(
      watch('error 0', this.WATCH_SECS),
      rxJsLog(this.log, RxJsLoggingLevel.DEBUG, 'loadCoursesWithRetryStrategy'),
      retryWhen(errors => errors.pipe(
        genericRetryStrategy({retryInterval, maxRetryAttempts: 4}),
        catchError(error => of(error))
      ))
    );
  }

  showError(msg, err) {
    this.errorFound = true;
    this.log.error(`Error occured - ${msg}:`, err);
  }
}
