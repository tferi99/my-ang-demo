import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Course} from '../../shared/model/course.model';
import {ApiStoreService} from '../../core/api-store.service';
import {concat, fromEvent, Observable} from 'rxjs';
import {Lesson} from '../../shared/model/lesson.model';
import {debounceTime, distinctUntilChanged, map, startWith, switchMap, tap} from 'rxjs/operators';
import {rxJsLog, RxJsLoggingLevel} from '../../shared/util/rxJsLog';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'rxj-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.sass']
})
export class TypeAheadComponent implements OnInit, AfterViewInit {
  currentCource: Course;
  lessons$: Observable<Lesson[]>;
  @ViewChild('lessonSearchInput') lessonSearchInput: ElementRef;

  constructor(private api: ApiStoreService, private log: NGXLogger) {
    this.currentCource = {
      'id': 1,
      'description': 'Angular for Beginners - DUMMY',
      'iconUrl': 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
      'courseListIcon': 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
      'longDescription': 'Establish a solid layer of fundamentals, learn what\'s under the hood of Angular',
      'category': 'BEGINNER',
      'lessonsCount': 10
    };
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.lessons$ = fromEvent<any>(this.lessonSearchInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      rxJsLog(this.log, RxJsLoggingLevel.INFO, 'SEARCH'),
      switchMap(search => this.loadLessons(search)),
      // rxJsLog(this.log, RxJsLoggingLevel.INFO, 'RESULT')
      tap(x => this.log.debug('result:', x))
    );
  }

  loadLessons(search = ''): Observable<Lesson[]> {
    return this.api.getLessons(this.currentCource.id, search);
  }
}
