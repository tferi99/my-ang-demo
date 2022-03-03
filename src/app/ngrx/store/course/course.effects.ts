import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {concatMap, filter, map, mergeMap, tap, withLatestFrom} from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import {CourseActionTypes, CourseActions, CourseRequested, CourseLoaded, AllCoursesRequested, AllCoursesLoaded} from './course.actions';
import {select, Store} from '@ngrx/store';
import {allCoursesLoaded} from './course.selectors';
import {NGXLogger} from 'ngx-logger';
import {CoursesService} from '../../../core/service/courses.service';
import {AppState} from '../../../reducers';


@Injectable()
export class CourseEffects {
  constructor(private actions$: Actions<CourseActions>, private coursesService: CoursesService, private store: Store<AppState>, private log: NGXLogger) {}

  @Effect()
  loadCourse$ = this.actions$
    .pipe(
      ofType<CourseRequested>(CourseActionTypes.CourseRequested),
      mergeMap(action => this.coursesService.findCourseById(action.payload.courseId)),
      map(course => new CourseLoaded({course}))
    );


    @Effect()
    loadAllCourses$ = this.actions$
      .pipe(
        ofType<AllCoursesRequested>(CourseActionTypes.AllCoursesRequested),
        // tap(act => this.log.debug('>>>', act)),
        withLatestFrom(this.store.pipe(select(allCoursesLoaded))),
        // filter(([action, allCoursesLoaded]) => !allCoursesLoaded),
        mergeMap(() => this.coursesService.findAllCourses()),
        map(courses => new AllCoursesLoaded({courses}))
      );
}



