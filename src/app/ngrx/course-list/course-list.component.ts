import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AuthState} from '../auth.reducer';
import {Observable} from 'rxjs';
import {Course} from '../../shared/model/course.model';
import {selectAllCourses} from '../course.selectors';

@Component({
  selector: 'ngrx-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass']
})
export class CourseListComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(private store: Store<AuthState>) {}

  ngOnInit() {
    this.courses$ = this.store.pipe(select(selectAllCourses));
  }
}
