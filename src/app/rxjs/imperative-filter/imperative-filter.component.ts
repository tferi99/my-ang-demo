import { Component, OnInit } from '@angular/core';
import {ApiStoreService} from '../../core/api-store.service';
import {filter} from 'rxjs/operators';
import {Observable, pipe} from 'rxjs';
import {Course} from '../../shared/model/course.model';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'rxj-imperative-filter',
  templateUrl: './imperative-filter.component.html',
  styleUrls: ['./imperative-filter.component.sass']
})
export class ImperativeFilterComponent implements OnInit {
  courses: Course[];
  count: number;

  constructor(private service: ApiStoreService, private log: NGXLogger) {}

  ngOnInit() {
    this.filterByDescription('');
  }

  filterByDescription(desc: string) {
    const flt = desc.toLowerCase();
    this.log.debug('filterByDescription[' + flt  + ']');
    this.service.getCourses().subscribe(courses => {
      this.courses = courses.filter(course => (desc !== '' ? course.description.toLowerCase().indexOf(flt) >= 0 : true));
      this.count = this.courses.length;
    });
    return false;
  }
}
