import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import {concatMap, filter, map} from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import {SpinnerActionTypes, SpinnerActions, ShowSpinnerAction, HideSpinnerAction} from './spinner.actions';



@Injectable()
export class SpinnerEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  showLoader$ = this.actions$.pipe(
    filter((action: any) => action && action.displayLoader ? action : null),
    map((action: any) => new ShowSpinnerAction(action))
  );

  @Effect()
  hideLoader$ = this.actions$.pipe(
    filter((action: any) => action && action.triggerAction ? action : null),
    map((action: any) => new HideSpinnerAction(action))
  );
}
