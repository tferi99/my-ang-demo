import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AuthState} from '../store/auth/auth.reducer';
import {Observable, Subscription} from 'rxjs';
import {Course} from '../../shared/model/course.model';
import {selectAllCourses} from '../store/course/course.selectors';
import {AllCoursesRequested} from '../store/course/course.actions';
import * as _ from 'lodash';
import {AppState} from '../../reducers';

@Component({
  selector: 'ngrx-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass']
})
export class CourseListComponent implements OnInit, OnDestroy {
  courses$: Observable<Course[]>;
  coursesHere: Course[];
  coursesHereDeep: Course[];
  coursesHereSub: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new AllCoursesRequested());
    this.courses$ = this.store.pipe(select(selectAllCourses));

    // don't use this way
    this.coursesHereSub = this.store.pipe(select(selectAllCourses)).subscribe(
      courses => {
        this.coursesHere = courses;
        this.coursesHereDeep = _.cloneDeep(courses);
      }
    );
  }

  ngOnDestroy(): void {
    this.coursesHereSub.unsubscribe();
  }

  badChange() {
    // YOU CANNOT CHANGE STATE DIRECTLY
    this.coursesHere[0].description = 'Abc...';
    console.log('Done.');
  }

  goodChange() {
    // YOU CAN CHANGE DEEP COPY OF STATE DIRECTLY
    this.coursesHereDeep[0].description = 'Abc...';
    console.log('Done.');
  }
}
