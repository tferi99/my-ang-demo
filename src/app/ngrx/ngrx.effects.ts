import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {NgrxActionTypes, Login, Logout} from './ngrx.actions';
import {tap} from 'rxjs/operators';
import {defer, of} from 'rxjs';

@Injectable()
export class NgrxEffects {

  @Effect({dispatch: false})
  login$ = this.actions$.pipe(
    ofType<Login>(NgrxActionTypes.LoginAction),       // filtering by action type
    tap(a => console.log('Action in effects', a)),
    tap(action => localStorage.setItem('user', JSON.stringify(action.payload.user)))
  );

  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<Logout>(NgrxActionTypes.LogoutAction),
    tap(action => localStorage.removeItem('user'))
  );

  @Effect()
  init$ = defer(() => {

    const userData = localStorage.getItem("user");

    if (userData) {
      return of(new Login({user:JSON.parse(userData)}));
    }
    else {
      return <any>of(new Logout());
    }
  });

  constructor(private actions$: Actions) {}
}
