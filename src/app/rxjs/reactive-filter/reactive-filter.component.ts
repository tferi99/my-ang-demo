import { Component, OnInit } from '@angular/core';
import {ApiStoreService} from '../../core/api-store.service';
import {interval, Observable, of} from 'rxjs';
import {filter, map, shareReplay, take} from 'rxjs/operators';
import {Course} from '../../shared/model/course.model';

@Component({
  selector: 'rxj-reactive-filter',
  templateUrl: './reactive-filter.component.html',
  styleUrls: ['./reactive-filter.component.sass']
})
export class ReactiveFilterComponent implements OnInit {
  constructor(private service: ApiStoreService) {}
  courses$: Observable<Course[]>;
  filtered$: Observable<Course[]>;

  count: number;

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
    console.log('filterByDescription[' + flt  + ']');
    this.filtered$ = this.courses$.pipe(
      map(courses => courses.filter(course => (desc !== '' ? course.description.toLowerCase().indexOf(flt) >= 0 : true)))
    );
    return false;
  }
}
