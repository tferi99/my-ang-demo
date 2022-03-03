import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../core/service/api.service';
import {Course} from '../../shared/model/course.model';
import {Observable} from 'rxjs';
import {map, share} from 'rxjs/operators';

@Component({
  selector: 'rxj-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass']
})
export class CourseListComponent implements OnInit {
  courses$!: Observable<Course[]>;
  coursesCount$!: Observable<number>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.courses$ = this.apiService.getCourses().pipe(
      // It makes cold to hot.
      // If you don't share this stream this way, 2 HTTP (XHR) query will be performed
      share()
    );
    this.coursesCount$ = this.courses$.pipe(
      map(x => x.length)
    );
  }
}
