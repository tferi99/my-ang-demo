import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable, of, throwError, timer} from 'rxjs';
import {Course} from '../../shared/model/course.model';
import {ApiStoreService} from '../../core/api-store.service';
import {catchError, delayWhen, finalize, retryWhen, tap} from 'rxjs/operators';

@Component({
  selector: 'rxj-error-test',
  templateUrl: './error-test.component.html',
  styleUrls: ['./error-test.component.sass']
})
export class ErrorTestComponent implements OnInit, AfterViewInit {
  courses$: Observable<Course[]>;

  constructor(private api: ApiStoreService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  loadCourses1(): void {
    this.courses$ = this.api.getCoursesErr().pipe(
      tap(v => console.log),
      catchError(err => of([]))         // returning an alternative Observable on error
    );
  }

  loadCourses2(): void {
    this.courses$ = this.api.getCoursesErr().pipe(
      tap(v => console.log),
      catchError(err => {
        console.error('Error occured: ' + err);
        console.error('Error object: ' + JSON.stringify(err));
        return throwError(err);                   // returning an error Observable on error
      })
    );
  }

  loadCourses3(): void {
    this.courses$ = this.api.getCoursesErr().pipe(
        catchError(err => {                   // you can catch error immediately in the 1st operator, or everywhere error can generated
        console.error('Error occured: ' + err);
        console.error('Error object: ' + JSON.stringify(err));
        return throwError(err);                   // returning an error Observable on error
      }),
      tap(v => console.log),
      finalize(() => {
        // SOME CLEANUP LOGIC
        console.log('Error handled with cleanup.');
      })
    );
  }

  loadCourses4(): void {
    const retryInterval = 2000;
    this.courses$ = this.api.getCoursesErr().pipe(
      tap(v => console.log),
      retryWhen(errors => errors.pipe(
        tap(val => console.log(`Error found -> retry in ${retryInterval} msecs`)),      // log error message
        delayWhen((val, index) => timer(val * retryInterval))   // restart in 6 seconds
      ))
    );
  }
}
