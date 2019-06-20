import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {concat, fromEvent, interval, noop, Observable, of, OperatorFunction, pipe, range, Subscription, timer} from 'rxjs';
import {concatMap, exhaustMap, filter, map, mergeMap, switchMap, take, tap} from 'rxjs/operators';
import {ApiService} from '../../core/service/api.service';
import {Course} from '../../shared/model/course.model';
import {NGXLogger} from 'ngx-logger';
import {getGroup, watch} from 'rxjs-watcher/dist';

enum FlatteningStrategy {
  MERGE = 'merge',
  SWITCH = 'switch',
  CONCAT = 'concat',
  EXHAUST = 'exchaust'
}

@Component({
  selector: 'rxj-flattening',
  templateUrl: './flattening.component.html',
  styleUrls: ['./flattening.component.sass']
})
export class FlatteningComponent implements OnInit, AfterViewInit {
  flatteningTypeEnum = FlatteningStrategy;
  concatenateObserversActive = false;
  flatteningStrategy = FlatteningStrategy.CONCAT;
  private subscription: Subscription;
  currentSubscriptionType: string;
  networkMode = false;

  @ViewChild('clickTarget', {static: true})
  clickTarget: ElementRef;

  clickTargetVisible = 'hidden';

  @ViewChild('clickTarget2', {static: true})
  clickTarget2: ElementRef;

  @ViewChild('startBtn', {static: true}) startBtn: ElementRef;
  startBtnVisible = 'hidden';

  constructor(private api: ApiService, private log: NGXLogger) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  createSubscription(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.log.debug(this.currentSubscriptionType + ' : unsubscribed');
    }

    setTimeout(() => {
      const mapOp: OperatorFunction<any, any> = this.getMapOp(this.flatteningStrategy);
      let o: Observable<any> = null;

      this.log.debug('>>>>>>> ' + this.clickTargetVisible + ', ' + this.startBtnVisible);
      if (!this.networkMode) {
        o = fromEvent(this.clickTarget.nativeElement, 'click').pipe(
          watch('Input', 60),
          tap(() => this.log.debug('Clicked --> start ' + this.flatteningStrategy + ' processing')),
          mapOp,
          watch('Output', 60),
        );
      } else {
        o = fromEvent(this.startBtn.nativeElement, 'click').pipe(
          watch('Input', 60),
          tap(() => this.log.debug('Net --> start ' + this.flatteningStrategy + ' processing')),
          mapOp,
          watch('Output', 60),
        );
      }
      this.subscription = o.subscribe(
        (evt) => this.log.debug(this.flatteningStrategy + ' event: ' + evt),
        err => this.log.error(err),
        () => this.log.debug('----------- ' + this.flatteningStrategy + ' processing completed -----------------')
      );

      this.clickTargetVisible = this.subscription && !this.networkMode ? 'visible' : 'hidden';
      this.startBtnVisible = this.subscription && this.networkMode ? 'visible' : 'hidden';

      this.currentSubscriptionType = this.flatteningStrategy;
      this.log.debug(this.currentSubscriptionType + ' : subscribed');
    }, 1);
  }

  getMapOp(fs: FlatteningStrategy): OperatorFunction<any, any> {
    const id = 0;
    let mapOp: OperatorFunction<any, any> = null;
    switch (this.flatteningStrategy) {
      case FlatteningStrategy.MERGE:
        if (this.networkMode) {
          mapOp = mergeMap(this.slowNetworkOperation);
        } else {
          mapOp = mergeMap(this.createInternalObservable);
        }
        break;
      case FlatteningStrategy.SWITCH:
        if (this.networkMode) {
          mapOp = switchMap(this.slowNetworkOperation);
        } else {
          mapOp = switchMap(this.createInternalObservable);
        }
        break;
      case FlatteningStrategy.CONCAT:
        if (this.networkMode) {
          mapOp = concatMap(this.slowNetworkOperation);
        } else {
          mapOp = concatMap(this.createInternalObservable);
        }
        break;
      case FlatteningStrategy.EXHAUST:
        if (this.networkMode) {
          mapOp = exhaustMap(this.slowNetworkOperation);
        } else {
          mapOp = exhaustMap(this.createInternalObservable);
        }
        break;
      default:
        this.log.error(this.flatteningStrategy + ' : bad flattening strategy');
    }
    return mapOp;
  }

  createInternalObservable(): Observable<number> {
    const innerWatch = getGroup('Inner');

    return timer(0, 500).pipe(
      innerWatch('Internal timer'),
      take(10)
    );
  }

  slowNetworkOperation(): Observable<Course[]> {
    return this.api.getCoursesSlow().pipe(
      watch('slowNetworkOperation')
    );
  }

  slowNetworkOperationSubscribe() {
    this.slowNetworkOperation().subscribe();
  }

  createWait(id: number, msecs: number, loop = 1, offset = 0): Observable<number> {
    return interval(msecs).pipe(
      map(x => x + offset),
      tap(x => this.log.debug('wait[' + id + ']:' + msecs)),
      take(loop)
    );
  }

  staticConcatObservers() {
    this.concatenateObserversActive = true;
    const source1$ = of(1, 2, 3);
    // const wait0 = interval(1000);        // never completed!
    const wait1$ = this.createWait(1, 1000, 1, 10);
    const source2$ = of(4, 5, 6);
    const wait2$ = this.createWait(2, 2000, 1, 20);
    const source3$ = of(7, 8, 9);

    const result = concat(source1$, wait1$, source2$, wait2$, source3$);
    result.subscribe(
      (x) => this.log.debug('>>> ' + x),
      () => this.log.debug('error'),
      () => {
        this.concatenateObserversActive = false;
        this.log.debug('--------- completed -------------');
      }
    );
  }

  test() {
    let counter = 0;

    const innerWatch2 = getGroup('Inner2');

    fromEvent(this.clickTarget2.nativeElement, 'click').pipe(
      map(() => counter++),
      watch('input', 30),
      take(5),
      mergeMap(x => interval(500).pipe(
        innerWatch2('interval-' + counter),
        take(10)
        )
      ),
      watch('output', 30),
    ).subscribe();
  }
}
