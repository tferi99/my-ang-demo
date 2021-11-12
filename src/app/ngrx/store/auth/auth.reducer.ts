import {AuthActions, AuthActionTypes, LoginSuccessAction} from './auth.actions';
import {User} from '../../../shared/model/user.model';


export interface AuthState {
  loggedIn: boolean;
  user?: User;
  errorMessage?: string;
}

export const initialState: AuthState = {
  loggedIn: false,
  user: undefined,
  errorMessage: undefined,
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccessAction:
      return {
        loggedIn: true,
        user: action.payload,
        errorMessage: undefined
      };
    case AuthActionTypes.LoginFailedAction:
      return {
        loggedIn: false,
        user: undefined,
        errorMessage: action.payload.errorMessage
      };
    case AuthActionTypes.LogoutAction:
      return {
        loggedIn: false,
        user: undefined,
        errorMessage: undefined
      };
    default:
      return state;
  }
}
