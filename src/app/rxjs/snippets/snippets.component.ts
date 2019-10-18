import { Component, OnInit } from '@angular/core';
import {interval, merge, noop, Observable, OperatorFunction, pipe, Subject, Subscription, throwError, timer} from 'rxjs';
import {getGroup, watch} from 'rxjs-watcher/dist';
import {filter, map, switchMap, take, takeUntil, takeWhile, withLatestFrom} from 'rxjs/operators';
import {Form, FormBuilder, Validators} from '@angular/forms';
import {CustomValidators} from '../../shared/util/custom-validators';
import {NgxSpinnerService} from 'ngx-spinner';
import {SPINNER_TYPE} from '../../shared/app.constants';

const TEST_SECS = 15;

type BehaviorImpl = () => OperatorFunction<any, any>;


@Component({
  selector: 'rxj-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.sass']
})
export class SnippetsComponent implements OnInit {
/*  form = this.fb.group({
    withInterval: [],
    age: ['0', [CustomValidators.required, Validators.min(1), , Validators.max(150)]],
    gender: ['', CustomValidators.required]
  });*/

  subscription: Subscription;
/*  get running() {
    return (this.subscription !== undefined);
  }*/
  running = false;
  stopSignal$: Subject<boolean>;
  errorEmitter$: Subject<number>;
  spinnerType = SPINNER_TYPE;

  constructor(private fb: FormBuilder, private ngxSpinnerService: NgxSpinnerService) {
    this.errorEmitter$ = new Subject<number>();
  }

  ngOnInit() {
  }

  count3() {
    const ops = pipe(
      take(3)
    );
    this.runInterval(ops, TEST_SECS);
  }

  count3_filter() {
    const ops = pipe(
      take(5),
      filter(x => x < 3),
    );
    this.runInterval(ops, TEST_SECS);
  }

  withLatestFrom() {
    const timer2 = interval(600).pipe(watch('backgroundCounter-2', TEST_SECS));

    const ops = pipe(
      take(14),
      withLatestFrom(timer2)
    );
    this.runInterval(ops, TEST_SECS);
  }

  // -------------- runner ----------------------
  runInterval(ops: OperatorFunction<any, any>, watchSteps: number) {
    this.run(interval(1000), ops, watchSteps);
  }

  run(observable: Observable<number>, ops: OperatorFunction<any, any>, watchSteps: number) {
    this.unsubscribeExisting();

    this.stopSignal$ = new Subject();

    // error interrupt
    /*
    const errorGen$ = this.errorEmitter$.asObservable().pipe(
      switchMap(x => throwError('Fired error :)')),
      watch('error', watchSteps),
    );
    */

    this.running = true;
    this.ngxSpinnerService.show();
    const source$ = observable.pipe(
      watch('INPUT', watchSteps),
      ops,
      watch('OUTPUT', watchSteps),
    );

    // error interrupt
    /*
    this.subscription = merge(source$, errorGen$).pipe(
    */

    this.subscription = source$.pipe(
      takeUntil(this.stopSignal$),
//      watch('merged', watchSteps),
    ).subscribe(
      (val) => {},
      err => {
        console.error('Error found:', err);
        this.running = false;
        this.ngxSpinnerService.hide();
      },
      () => {
        this.running = false;
        this.ngxSpinnerService.hide();
      }
    );
  }

  fireError() {
    this.errorEmitter$.next(0);
  }

  stopExisting() {
    console.log('STOP!!!!!');
    this.stopSignal$.next(true);
    this.stopSignal$.complete();
  }

  pageReload() {
    window.location.reload();
  }

  unsubscribeExisting() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }
}
