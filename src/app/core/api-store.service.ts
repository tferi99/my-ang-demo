import {Injectable} from '@angular/core';
import {SERVER_API_CONTEXT_PATH} from '../shared/app.constants';
import {Course} from '../shared/model/course.model';
import {Lesson} from '../shared/model/lesson.model';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {rxJsLog, RxJsLoggingLevel} from '../shared/util/rxJsLog';
import {NGXLogger} from 'ngx-logger';
import {logger} from 'codelyzer/util/logger';

@Injectable({providedIn: 'root'})
export class ApiStoreService {

  constructor(private http: HttpClient, private log: NGXLogger) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(SERVER_API_CONTEXT_PATH + '/courses').pipe(
        tap(() => logger.debug('Courses - HTTP request executed')),
        map(res => Object.values(res['payload'])
      )
    );
  }

  getCoursesSlow(): Observable<Course[]> {
    return this.http.get<Course[]>(SERVER_API_CONTEXT_PATH + '/courses/slow').pipe(
      tap(() => logger.debug('Courses - HTTP request executed')),
      map(res => Object.values(res['payload'])
      )
    );
  }

  getCoursesWithRandomErr(): Observable<Course[]> {
    return this.http.get<Course[]>(SERVER_API_CONTEXT_PATH + '/courses/randomerr').pipe(
      rxJsLog(this.log, RxJsLoggingLevel.DEBUG, 'Courses - HTTP request executed'),
      map(res => Object.values(res['payload'])
      )
    );
  }

  getLessons(courseId: number, search = ''): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(SERVER_API_CONTEXT_PATH + `/lessons?courseId=${courseId}&filter=${search}`).pipe(
      rxJsLog(this.log, RxJsLoggingLevel.DEBUG, 'Lessons - HTTP request executed'),
      map(res => Object.values(res['payload'])
      )
    );
  }
}

