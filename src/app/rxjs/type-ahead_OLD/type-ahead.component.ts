import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import {ApiStoreService} from '../../core/api-store.service';
import {Course} from '../../shared/model/course.model';
import {Lesson} from '../../shared/model/lesson.model';

@Component({
  selector: 'rxj-type-ahead2',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.sass']
})
export class TypeAheadComponentXXXX implements OnInit, AfterViewInit {
  @ViewChild('lessonSearchInput') lessonSearchInput: ElementRef;
  courses: Observable<Course[]>;
  lessons: Observable<Lesson[]>;
  isCollapsedCourses = false;
  currentCource: Course;

  // constructor(private api: ApiStoreService, private changeDetector: ChangeDetectorRef) { }
  constructor(private api: ApiStoreService, private changeDetector: ChangeDetectorRef) { }


  ngOnInit() {
    this.courses = this.api.getCourses();
    this.lessons = this.loadLessons();
  }

  ngAfterViewInit(): void {
  }

  chooseCourse(course: Course) {
    // this.isCollapsedCourses = true;
    this.currentCource = course;
//    this.changeDetector.detectChanges();

    console.log('course: ' + this.currentCource);


/*    fromEvent<any>(this.lessonSearchInput.nativeElement, 'keyup').pipe(
      map<string, string>(event => event.target.value),
      tap(v => console.log('src: ' + v)),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(search => this.loadLessons(search))
    ).subscribe(ev => console.log(ev));*/

/*    this.lessons$ = fromEvent<any>(this.lessonSearchInput.nativeElement, 'keyup').pipe(
      map<string, Lesson[]>(event => event.target.value),
      debounceTime(500),
      distinctUntilChanged(),
      tap(x => console.log)
//      switchMap(this.api.getLessons)
    );*/
  }

  loadLessons(search = ''): Observable<Lesson[]> {
    console.log('course2: ' + this.currentCource);
    // return this.api.getLessons(this.currentCource.id);
    return this.api.getLessons(100);
  }

  backToCourses() {
    this.isCollapsedCourses = false;
    this.currentCource = null;
  }

  test() {
    console.log('CURR COURSE: ' + this.currentCource );
  }
}
