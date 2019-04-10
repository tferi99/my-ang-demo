import {Injectable} from '@angular/core';
import {SERVER_API_CONTEXT_PATH} from '../shared/app.constants';
import {Course} from '../shared/model/course.model';
import {Lesson} from '../shared/model/lesson.model';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {log, RxJsLoggingLevel} from '../shared/util/log';

@Injectable({
  providedIn: 'root'
})
export class ApiStoreService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(SERVER_API_CONTEXT_PATH + '/courses').pipe(
        tap(() => console.log('Courses - HTTP request executed')),
        map(res => Object.values(res['payload'])
      )
    );
  }

  getCoursesErr(): Observable<Course[]> {
    return this.http.get<Course[]>(SERVER_API_CONTEXT_PATH + '/courses/randomerr').pipe(
      log(RxJsLoggingLevel.DEBUG, 'Courses - HTTP request executed'),
      map(res => Object.values(res['payload'])
      )
    );
  }

  getLessons(courseId: number, search = ''): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(SERVER_API_CONTEXT_PATH + `/lessons?courseId=${courseId}&filter=${search}`).pipe(
      log(RxJsLoggingLevel.DEBUG, 'Lessons - HTTP request executed'),
      map(res => Object.values(res['payload'])
      )
    );
  }
}

