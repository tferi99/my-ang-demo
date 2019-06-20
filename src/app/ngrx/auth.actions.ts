import {User} from '../shared/model/user.model';
import {Action} from '@ngrx/store';

export enum AuthActionTypes {
  LoginAction = '[Auth] Login',
  LoginSuccessAction = '[Auth] LoginOk',
  LoginFailedAction = '[Auth] LoginFailed',
  LogoutAction = '[Auth] Logout',
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
  constructor(public payload: {message: string}) {}
}

export class LogoutAction implements Action {
  readonly type = AuthActionTypes.LogoutAction;
}

export type AuthActions = LoginAction | LogoutAction | LoginSuccessAction | LoginFailedAction;
