import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActionTypes, Login, Logout} from './auth.actions';
import {tap} from 'rxjs/operators';
import {defer, of} from 'rxjs';
import {NGXLogger} from 'ngx-logger';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private log: NGXLogger) {}

  @Effect({dispatch: false})
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LoginAction),       // filtering by action type
    tap(a => {
      this.log.debug('Action in effects: ', a);
    }),
    tap(action => localStorage.setItem('user', JSON.stringify(action.payload.user)))
  );

  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.LogoutAction),
    tap(action => localStorage.removeItem('user'))
  );

  // -------------------------- restoring auth from local storage
/*
  @Effect()
  init$ = defer(() => {

    const userData = localStorage.getItem('selectUser');

    if (userData) {
      return of(new Login({selectUser: JSON.parse(userData)}));      // by dispatcing a login action
    } else {
      return of(new Logout());
    }
  });
*/
}
