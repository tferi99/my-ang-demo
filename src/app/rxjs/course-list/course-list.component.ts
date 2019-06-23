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
  courses$: Observable<Course[]>;
  coursesCount$: Observable<number>;
  courses2: Course[];

  constructor(private store: ApiService) {}

  ngOnInit() {
    this.courses$ = this.store.getCourses().pipe(
      // It makes cold to hot.
      // If you don't share this stream this way, 2 HTTP (XHR) query will be performed
      share()
    );
    this.coursesCount$ = this.courses$.pipe(
      map(x => x.length)
    );

    //setTimeout(() => this.store.getCourses().subscribe(x => this.courses2 = x), 1000);
  }
}
