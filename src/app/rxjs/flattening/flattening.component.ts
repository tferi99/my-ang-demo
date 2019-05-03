import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {concat, fromEvent, interval, noop, Observable, of, OperatorFunction, pipe, range, Subscription} from 'rxjs';
import {concatMap, exhaustMap, map, mergeMap, switchMap, take, tap} from 'rxjs/operators';
import {ApiStoreService} from '../../core/api-store.service';
import {Course} from '../../shared/model/course.model';

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

  @ViewChild('clickTarget') clickTarget: ElementRef;
  clickTargetVisible = 'hidden';
  @ViewChild('startBtn') startBtn: ElementRef;
  startBtnVisible = 'hidden';

  constructor(private api: ApiStoreService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
  }

  createSubscription(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log(this.currentSubscriptionType + ' : unsubscribed');
    }

    setTimeout(() => {
      const mapOp: OperatorFunction<any, any> = this.getMapOp(this.flatteningStrategy);
      let o: Observable<any> = null;

      console.log('>>>>>>> ' + this.clickTargetVisible  + ', ' + this.startBtnVisible);
      if (!this.networkMode) {
        o = fromEvent(this.clickTarget.nativeElement, 'click').pipe(
          tap(() => console.log('Clicked --> start ' + this.flatteningStrategy + ' processing')),
          mapOp
        );
      } else {
        o = fromEvent(this.startBtn.nativeElement, 'click').pipe(
          tap(() => console.log('Net --> start ' + this.flatteningStrategy + ' processing')),
          mapOp
        );
      }
      this.subscription = o.subscribe(
        (evt) => console.log(this.flatteningStrategy + ' event: ' + evt),
        err => console.error(),
        () => console.log('----------- ' + this.flatteningStrategy + ' processing completed -----------------')
      );

      this.clickTargetVisible = this.subscription && !this.networkMode ? 'visible' : 'hidden';
      this.startBtnVisible = this.subscription && this.networkMode ? 'visible' : 'hidden';

      this.currentSubscriptionType = this.flatteningStrategy;
      console.log(this.currentSubscriptionType + ' : subscribed');
    }, 1);
  }

  getMapOp(fs: FlatteningStrategy): OperatorFunction<any, any> {
    let mapOp: OperatorFunction<any, any> = null;
    switch (this.flatteningStrategy) {
      case FlatteningStrategy.MERGE:
        if (this.networkMode) {
          mapOp = mergeMap(this.slowNetworkOperation);
        } else {
          mapOp = mergeMap(this.startLongProcessing);
        }
        break;
      case FlatteningStrategy.SWITCH:
        if (this.networkMode) {
          mapOp = switchMap(this.slowNetworkOperation);
        } else {
          mapOp = switchMap(this.startLongProcessing);
        }
        break;
      case FlatteningStrategy.CONCAT:
        if (this.networkMode) {
          mapOp = concatMap(this.slowNetworkOperation);
        } else {
          mapOp = concatMap(this.startLongProcessing);
        }
        break;
      case FlatteningStrategy.EXHAUST:
        if (this.networkMode) {
          mapOp = exhaustMap(this.slowNetworkOperation);
        } else {
          mapOp = exhaustMap(this.startLongProcessing);
        }
        break;
      default:
        console.error(this.flatteningStrategy + ' : bad flattening strategy');
     }
    return mapOp;
  }

  startLongProcessing() {
    return interval(500).pipe(
      // tap((x) => console.log('processing-' + x)),
      take(10)
    );
  }

  slowNetworkOperation(): Observable<Course[]> {
    return this.api.getCoursesSlow();
  }

  slowNetworkOperationSubscribe() {
    this.slowNetworkOperation().subscribe();
  }

  createWait(id: number, msecs: number, loop = 1, offset = 0): Observable<number> {
    return interval(msecs).pipe(
      map(x => x + offset),
      tap(x => console.log('wait[' + id + ']:' + msecs)),
      take(loop)
    );
  }

  staticConcatObservers() {
    this.concatenateObserversActive = true;
    const source1$ = of(1, 2, 3);
    // const wait0 = interval(1000);        // never completed!
    const wait1$ = this.createWait(1,1000, 1, 10);
    const source2$ = of(4, 5, 6);
    const wait2$ = this.createWait(2,2000, 1, 20);
    const source3$ = of(7, 8, 9);

    const result = concat(source1$, wait1$, source2$, wait2$, source3$);
    result.subscribe(
      (x) => console.log('>>> ' + x),
      () => console.log('error'),
      () => {
        this.concatenateObserversActive = false;
        console.log('--------- completed -------------');
      }
    );
  }

}
