import { Component, OnInit } from '@angular/core';
import { ApiStoreService} from '../../core/api-store.service';
import {Course} from '../../shared/model/course.model';
import {load} from '@angular/core/src/render3';
import {Observable} from 'rxjs';

@Component({
  selector: 'rxj-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass']
})
export class CourseListComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(private store: ApiStoreService) {}

  ngOnInit() {
    this.courses$ = this.store.getCourses();
  }
}
