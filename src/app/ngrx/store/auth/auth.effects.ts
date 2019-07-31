import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActionTypes, LoginAction, LoginFailedAction, LoginSuccessAction, LogoutAction} from './auth.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {NGXLogger} from 'ngx-logger';
import {LoginService} from '../../../core/service/login.service';
import {watch} from 'rxjs-watcher/dist';
import {Router} from '@angular/router';
import {of} from 'rxjs';
import {LocalStorageService} from '../../../core/service/local-storage.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private log: NGXLogger, private loginService: LoginService, private router: Router, private localStoreService: LocalStorageService) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType<LoginAction>(AuthActionTypes.LoginAction),
    map((action: LoginAction) => action.payload),
    switchMap(payload =>
      this.loginService.login(payload.email, payload.password).pipe(
        watch('from loginService.login()', 10),
        map(user => new LoginSuccessAction(user)),
        catchError(error => of(new LoginFailedAction({ errorMessage: error}))),
        watch('login$ output', 10)
      )
    )
  );

  @Effect({dispatch: false})
  loginSuccess$ = this.actions$.pipe(
    ofType<LoginSuccessAction>(AuthActionTypes.LoginSuccessAction),
    tap(action => {
      this.localStoreService.addUser(action.payload);
      this.router.navigateByUrl('/ngrx');
    })
  );

  @Effect({dispatch: false})
  loginFailed$ = this.actions$.pipe(
    ofType<LoginFailedAction>(AuthActionTypes.LoginFailedAction),
    tap(action => this.localStoreService.deleteUser())
  );

  // -------------------------- removing auth from local storage --------------------------
  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<LogoutAction>(AuthActionTypes.LogoutAction),
    tap(action => this.localStoreService.deleteUser())
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
