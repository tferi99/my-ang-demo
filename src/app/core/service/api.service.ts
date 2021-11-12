import {Injectable} from '@angular/core';
import {SERVER_API_CONTEXT_PATH} from '../../shared/app.constants';
import {Course} from '../../shared/model/course.model';
import {Lesson} from '../../shared/model/lesson.model';
import {Observable} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {rxJsLog, RxJsLoggingLevel} from '../../shared/util/rxJsLog';
import {NGXLogger} from 'ngx-logger';
import {RestResource} from './rest-resource';

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor(private http: HttpClient, private log: NGXLogger) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(SERVER_API_CONTEXT_PATH + '/courses').pipe(
      tap(() => this.log.debug('Courses - HTTP request executed')),
      // @ts-ignore
      map(res => (res as RestResource).payload)
    );
  }

  getCoursesLimit(limit: number): Observable<Course[]> {
    return this.http.get<Course[]>(SERVER_API_CONTEXT_PATH + '/courses/limit/' + limit).pipe(
      take(limit),
      tap(() => this.log.debug('Courses - HTTP request executed')),
      // @ts-ignore
      map(res => (res as RestResource).payload)
    );
  }

  getCoursesSlow(): Observable<Course[]> {
    return this.http.get<Course[]>(SERVER_API_CONTEXT_PATH + '/courses/slow').pipe(
        tap(() => this.log.debug('Courses - HTTP request executed')),
      // @ts-ignore
      map(res => Object.values((res as RestResource).payload))
    );
  }

  getCoursesWithRandomErr(): Observable<Course[]> {
    return this.http.get<Course[]>(SERVER_API_CONTEXT_PATH + '/courses/randomerr').pipe(
      // @ts-ignore
      map(res => (res as RestResource).payload)
    );
  }

  getLessons(courseId: number, search = ''): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(SERVER_API_CONTEXT_PATH + `/lessons?courseId=${courseId}&filter=${search}`).pipe(
      // @ts-ignore
      map(res => (res as RestResource).payload)
    );
  }
}

