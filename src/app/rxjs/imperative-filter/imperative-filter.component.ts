import { Component, OnInit } from '@angular/core';
import {ApiStoreService} from '../../core/api-store.service';
import {filter} from 'rxjs/operators';
import {Observable, pipe} from 'rxjs';
import {Course} from '../../shared/model/course.model';

@Component({
  selector: 'rxj-imperative-filter',
  templateUrl: './imperative-filter.component.html',
  styleUrls: ['./imperative-filter.component.sass']
})
export class ImperativeFilterComponent implements OnInit {
  constructor(private service: ApiStoreService) {}
  courses: Course[];
  count: number;

  ngOnInit() {
    this.filterByDescription('');
  }

  filterByDescription(desc: string) {
    const flt = desc.toLowerCase();
    console.log('filterByDescription[' + flt  + ']');
    this.service.getCourses().subscribe(courses => {
      this.courses = courses.filter(course => (desc !== '' ? course.description.toLowerCase().indexOf(flt) >= 0 : true));
      this.count = this.courses.length;
    });
    return false;
  }
}
