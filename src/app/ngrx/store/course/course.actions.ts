import { Action } from '@ngrx/store';
import {Course} from '../../../shared/model/course.model';
import {HideLoader, ShowLoader} from '../../../core/decorator/spinner.decorator';

export enum CourseActionTypes {
  CourseRequested = '[View Course Page] Course Requested',
  CourseLoaded = '[Courses API] Course Loaded',
  AllCoursesRequested = '[Courses Home Page] All Courses Requested',
  AllCoursesLoaded = '[Courses API] All Courses Loaded',
}


export class CourseRequested implements Action {
  readonly type = CourseActionTypes.CourseRequested;
  constructor(public payload: { courseId: number }) {}
}

export class CourseLoaded implements Action {
  readonly type = CourseActionTypes.CourseLoaded;
  constructor(public payload: { course: Course }) {}
}

// @ShowLoader()
export class AllCoursesRequested implements Action {
  readonly type = CourseActionTypes.AllCoursesRequested;
}

// @HideLoader(CourseActionTypes.AllCoursesLoaded)
export class AllCoursesLoaded implements Action {
  readonly type = CourseActionTypes.AllCoursesLoaded;
  constructor(public payload: { courses: Course[] }) {}
}

export type CourseActions =
  CourseRequested
  | CourseLoaded
  | AllCoursesRequested
  | AllCoursesLoaded;

