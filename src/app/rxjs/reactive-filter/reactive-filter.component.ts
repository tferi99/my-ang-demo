import { Component, OnInit } from '@angular/core';
import {ApiStoreService} from '../../core/api-store.service';
import {interval, Observable, of} from 'rxjs';
import {filter, map, shareReplay, take} from 'rxjs/operators';
import {Course} from '../../shared/model/course.model';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'rxj-reactive-filter',
  templateUrl: './reactive-filter.component.html',
  styleUrls: ['./reactive-filter.component.sass']
})
export class ReactiveFilterComponent implements OnInit {
  courses$: Observable<Course[]>;
  filtered$: Observable<Course[]>;

  count: number;

  constructor(private service: ApiStoreService, private log: NGXLogger) {}

  ngOnInit() {
    this.courses$ = this.service.getCourses().pipe(shareReplay());
    this.filterByDescription('');

    // we have here 1 HTTP request, even with multiple subscriptions
    this.courses$.subscribe();
    this.courses$.subscribe();
    this.courses$.subscribe();
    this.courses$.subscribe();
    this.courses$.subscribe();
    this.courses$.subscribe();
    this.courses$.subscribe();
  }

  filterByDescription(desc: string) {
    const flt = desc.toLowerCase();
    this.log.debug('filterByDescription[' + flt  + ']');
    this.filtered$ = this.courses$.pipe(
      map(courses => courses.filter(course => (desc !== '' ? course.description.toLowerCase().indexOf(flt) >= 0 : true)))
    );
    return false;
  }
}
