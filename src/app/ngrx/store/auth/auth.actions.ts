import {User} from '../../../shared/model/user.model';
import {Action} from '@ngrx/store';

export enum AuthActionTypes {
  LoginAction = '[Auth] Login',
  LoginSuccessAction = '[Auth] LoginOk',
  LoginFailedAction = '[Auth] LoginFailed',
  LogoutAction = '[Auth] Logout',
  CheckLoginAction = '[Auth] CheckLogin',
}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.LoginAction;
  constructor(public payload: {email: string, password: string}) {}
}

export class LoginSuccessAction implements Action {
  readonly type = AuthActionTypes.LoginSuccessAction;
  constructor(public payload: User) {}
}

export class LoginFailedAction implements Action {
  readonly type = AuthActionTypes.LoginFailedAction;
  constructor(public payload: {errorMessage: string}) {}
}

export class LogoutAction implements Action {
  readonly type = AuthActionTypes.LogoutAction;
}

export class CheckLoginAction implements Action {
  readonly type = AuthActionTypes.CheckLoginAction;
}

export type AuthActions = LoginAction | LogoutAction | LoginSuccessAction | LoginFailedAction | CheckLoginAction;
