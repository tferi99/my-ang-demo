import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { SpinnerActionTypes, SpinnerActions } from './spinner.actions';



@Injectable()
export class SpinnerEffects {


  @Effect()
  loadSpinners$ = this.actions$.pipe(
    ofType(SpinnerActionTypes.LoadSpinners),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<SpinnerActions>) {}

}
