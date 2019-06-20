import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActionTypes, LoginAction, LoginFailedAction, LoginSuccessAction, LogoutAction} from './auth.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {NGXLogger} from 'ngx-logger';
import {LoginService} from '../core/login.service';
import {watch} from 'rxjs-watcher/dist';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private log: NGXLogger, private loginService: LoginService, private router: Router) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType<LoginAction>(AuthActionTypes.LoginAction),       // filtering by action type
    map((action: LoginAction) => action.payload),
    switchMap(payload =>
      this.loginService.login(payload.email, payload.password).pipe(
        watch('from loginService.login()', 10),
        map(user => new LoginSuccessAction(user)),
        catchError(error => new LoginFailedAction({ message: error })),
        watch('login$ output', 10)
      )
    )
  );

  // -------------------------- saving auth into local storage --------------------------
  @Effect({dispatch: false})
  loginSuccess$ = this.actions$.pipe(
    ofType<LoginSuccessAction>(AuthActionTypes.LoginSuccessAction),
    tap(action => {
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      this.router.navigateByUrl('/ngrx');
    })
  );

  @Effect({dispatch: false})
  loginFailed$ = this.actions$.pipe(
    ofType<LoginFailedAction>(AuthActionTypes.LoginFailedAction),
    tap(action => localStorage.removeItem('user'))
  );

  // -------------------------- removing auth from local storage --------------------------
  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<LogoutAction>(AuthActionTypes.LogoutAction),
    tap(action => localStorage.removeItem('user'))
  );

  // -------------------------- restoring auth from local storage --------------------------
/*
  @Effect()
  init$ = defer(() => {

    const userData = localStorage.getItem('selectUser');

    if (userData) {
      return of(new LoginAction({selectUser: JSON.parse(userData)}));      // by dispatcing a login action
    } else {
      return of(new LogoutAction());
    }
  });
*/
}
