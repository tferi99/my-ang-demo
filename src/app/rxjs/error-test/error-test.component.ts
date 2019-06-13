import {AfterViewInit, Component, OnInit} from '@angular/core';
import {from, Observable, of, throwError, timer} from 'rxjs';
import {Course} from '../../shared/model/course.model';
import {ApiStoreService} from '../../core/api-store.service';
import {catchError, delayWhen, finalize, retryWhen, tap} from 'rxjs/operators';
import {rxJsLog, RxJsLoggingLevel} from '../../shared/util/rxJsLog';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'rxj-error-test',
  templateUrl: './error-test.component.html',
  styleUrls: ['./error-test.component.sass']
})
export class ErrorTestComponent implements OnInit, AfterViewInit {
  courses$: Observable<Course[]>;
  errorFound = false;
  alternativeCourse: Course;

  constructor(private api: ApiStoreService, private log: NGXLogger) {
    this.alternativeCourse = {id: -1, description: 'Error on server. Till problem solved read this:', alternativeCourseTitle: 'Index', alternativeCourseUrl: 'https://index.hu'};
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
  }

  // ------------------------- handling error in error callback -----------------------------
  loadCourses0(): void {
    this.api.getCoursesErr().pipe(
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
    this.courses$ = this.api.getCoursesErr().pipe(
      rxJsLog(this.log, RxJsLoggingLevel.DEBUG, 'courses-1'),
      catchError(err => {
        this.showError('courses-1', err);
        return of([this.alternativeCourse]);           // returning an alternative Observable on error
      })
    );
  }

  // ------------------------- Rethrow Strategy -----------------------------
  loadCoursesWithRethrow(): void {
    this.errorFound = false;
    this.courses$ = this.api.getCoursesErr().pipe(
      rxJsLog(this.log, RxJsLoggingLevel.DEBUG, 'courses-2'),
      catchError(err => {
        this.showError('courses-2', err);
        return throwError(err);                   // returning an error Observable on error
      })
    );
  }

  // ------------------------- Error Cleanup -----------------------------
  loadCoursesWithCleanup(): void {
    this.errorFound = false;
    this.courses$ = this.api.getCoursesErr().pipe(
      rxJsLog(this.log, RxJsLoggingLevel.DEBUG, 'courses-3'),
      catchError(err => {                   // you can catch error immediately in the 1st operator, or everywhere error can generated
        this.showError('courses-3', err);
        return throwError(err);                   // returning an error Observable on error
      }),
      finalize(() => {
        // SOME CLEANUP LOGIC
        this.log.debug('Error handled with cleanup.');
      })
    );
  }

  // -------------------------  -----------------------------
  loadCoursesWithDelayRetry(): void {
    this.errorFound = false;
    const retryInterval = 2000;
    this.courses$ = this.api.getCoursesErr().pipe(
      rxJsLog(this.log, RxJsLoggingLevel.DEBUG, 'courses-4'),
      retryWhen(errors => errors.pipe(
        tap(val => this.log.debug(`Error found -> retry in ${retryInterval} msecs`)),      // rxJsLog error message
        delayWhen((val, index) => timer(val * retryInterval))   // restart in 2 seconds
      ))
    );
  }

  showError(msg, err) {
    this.errorFound = true;
    this.log.error(`Error occured - ${msg}:`, err);
  }
}
