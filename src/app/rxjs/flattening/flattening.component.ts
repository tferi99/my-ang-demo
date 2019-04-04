import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {concat, fromEvent, interval, noop, Observable, of, OperatorFunction, pipe, Subscription} from 'rxjs';
import {concatMap, exhaustMap, map, mergeMap, switchMap, take, tap} from 'rxjs/operators';

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
  @ViewChild('clickTarget') clickTarget: ElementRef;
  private subscription: Subscription;
  currentSubscriptionType: string;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
  }

  createSubscription(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log(this.currentSubscriptionType + ' : unsubscribed');
    }

    let mapOp: OperatorFunction<any, any> = null;

    switch (this.flatteningStrategy) {
      case FlatteningStrategy.MERGE:
        mapOp = mergeMap(this.startLongProcessing);
        break;
      case FlatteningStrategy.SWITCH:
        mapOp = switchMap(this.startLongProcessing);
        break;
      case FlatteningStrategy.CONCAT:
        mapOp = concatMap(this.startLongProcessing);
        break;
      case FlatteningStrategy.EXHAUST:
        mapOp = exhaustMap(this.startLongProcessing);
        break;
      default:
        console.error(this.flatteningStrategy + ' : bad flattening strategy');
    }

    this.subscription = fromEvent(this.clickTarget.nativeElement, 'click').pipe(
      tap(() => console.log('Clicked --> start ' + this.flatteningStrategy + ' processing')),
      mapOp
    ).subscribe(
      (evt) => console.log(this.flatteningStrategy + ' event: ' + evt),
      noop,
      () => console.log('----------- ' + this.flatteningStrategy + ' processing completed -----------------')
    );

    this.currentSubscriptionType = this.flatteningStrategy;
    console.log(this.currentSubscriptionType + ' : subscribed');
  }

  startLongProcessing() {
    return interval(1000).pipe(
      // tap((x) => console.log('processing-' + x)),
      take(10)
    );
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
