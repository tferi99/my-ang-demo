import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../../shared/model/course.model';
import {map} from 'rxjs/operators';
import {RestResource} from './rest-resource';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  findCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(`/api/courses/${courseId}`);
  }

  findAllCourses(): Observable<Course[]> {
    return this.http.get('/api/courses').pipe(
      map(res => Object.values((res as RestResource).payload)
    ));
  }

  saveCourse(courseId: number, changes: Partial<Course>) {
    return this.http.put('/api/courses/' + courseId, changes);
  }
}
