import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {empty, fromEvent, interval, merge} from 'rxjs';
import {mapTo, scan, startWith, switchMap, takeWhile, tap} from 'rxjs/operators';

const COUNTDOWN_SECONDS = 10;

@Component({
  selector: 'app-counter-pause-resume',
  templateUrl: './counter-pause-resume.component.html',
  styleUrls: ['./counter-pause-resume.component.sass']
})
export class CounterPauseResumeComponent implements OnInit, AfterViewInit {
  @ViewChild('btnPause') btnPause!: ElementRef;
  @ViewChild('btnResume') btnResume!: ElementRef;
  running = false;
  count: number;

  constructor() {
    this.count = 0;
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.restart();
  }

  restart() {
    if (this.running) {
      return;
    }

    const interval$ = interval(1000).pipe(mapTo(-1));
    const pause$ = fromEvent(this.btnPause.nativeElement, 'click').pipe(mapTo(false));
    const resume$ = fromEvent(this.btnResume.nativeElement, 'click').pipe(mapTo(true));

    const timer$ = merge(pause$, resume$)
      .pipe(
        startWith(true),
        tap(v => console.log('STREAM-1:', v)),
        switchMap(val => (val ? interval$ : empty())),
        tap(v => console.log('STREAM-2:', v)),
        scan((acc, curr) => (curr ? curr + acc : acc), COUNTDOWN_SECONDS),
        tap(v => console.log('STREAM-3:', v)),
        takeWhile(v => v >= 0),
        tap(v => console.log('STREAM-4:', v)),
      )
      .subscribe(
        (val: any) => this.count = val,
        err => {
          console.error(err);
          this.running = false;
        },
        () => this.running = false
        );
    this.running = true;
  }
}
