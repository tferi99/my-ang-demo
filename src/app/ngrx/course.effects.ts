import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {concatMap, filter, map, mergeMap, tap, withLatestFrom} from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import {CourseActionTypes, CourseActions, CourseRequested, CourseLoaded, AllCoursesRequested, AllCoursesLoaded} from './course.actions';
import {AppState} from '../reducers';
import {select, Store} from '@ngrx/store';
import {allCoursesLoaded} from './course.selectors';
import {CoursesService} from '../core/courses.service';


@Injectable()
export class CourseEffects {

  @Effect()
  loadCourse$ = this.actions$
    .pipe(
      ofType<CourseRequested>(CourseActionTypes.CourseRequested),
      mergeMap(action => this.coursesService.findCourseById(action.payload.courseId)),
      map(course => new CourseLoaded({course}))
    );

  // ... other effects

  constructor(private actions$: Actions<CourseActions>, private coursesService: CoursesService, private store: Store<AppState>) {}
}



/*  @Effect()
  loadAllCourses$ = this.actions$
    .pipe(
      ofType<AllCoursesRequested>(CourseActionTypes.AllCoursesRequested),
      tap(act => console.log('>>>>>>>>>>>', act)),
      withLatestFrom(this.store.pipe(select(allCoursesLoaded))),
//      filter(([action, allCoursesLoaded]) => !allCoursesLoaded),
      mergeMap(() => this.coursesService.findAllCourses()),
      map(courses => new AllCoursesLoaded({courses}))
    );*/

