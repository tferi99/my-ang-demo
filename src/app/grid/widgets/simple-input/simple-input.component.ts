import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, startWith} from 'rxjs/operators';
import {rxJsLog, RxJsLoggingLevel} from '../../../shared/util/rxJsLog';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'grid-simple-input',
  templateUrl: './simple-input.component.html',
  styleUrls: ['./simple-input.component.sass']
})
export class SimpleInputComponent implements OnInit, AfterViewInit {
  @ViewChild('search', {static: true}) searchInput!: ElementRef;
  typedCharacter$!: Observable<string>;

  constructor(private log: NGXLogger) { }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.typedCharacter$ = fromEvent<any>(this.searchInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      rxJsLog(this.log, RxJsLoggingLevel.DEBUG, 'SEARCH'),
      rxJsLog(this.log, RxJsLoggingLevel.INFO, 'SEARCH')
    );
  }

  changed(e: any) {
    console.log('Changed: ', e);
  }
}
