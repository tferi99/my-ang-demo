import {AuthActions, AuthActionTypes, LoginSuccessAction} from './auth.actions';
import {User} from '../shared/model/user.model';


export interface AuthState {
  loggedIn: boolean;
  user: User;
  loginError: string;
}

export const initialState: AuthState = {
  loggedIn: false,
  user: undefined,
  loginError: undefined,
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccessAction:
      return {
        loggedIn: true,
        user: action.payload,
        loginError: undefined
      }
    case AuthActionTypes.LoginFailedAction:
      return {
        loggedIn: false,
        user: undefined,
        loginError: action.payload.message
      }
    case AuthActionTypes.LogoutAction:
      return {
        loggedIn: false,
        user: undefined,
        loginError: undefined
      }
    default:
      return state;
  }
}
