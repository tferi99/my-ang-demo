import { Action } from '@ngrx/store';
import {User} from '../shared/model/user.model';

export enum NgrxActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Logout] Action',
}

export class Login implements Action {
  readonly type = NgrxActionTypes.LoginAction;

  constructor(public payload: {user: User}) {}
}

export class Logout implements Action {

  readonly type = NgrxActionTypes.LogoutAction;

}

export type NgrxActions = Login | Logout;
