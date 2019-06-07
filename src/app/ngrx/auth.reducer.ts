import {AuthActions, AuthActionTypes} from './auth.actions';
import {User} from '../shared/model/user.model';


export interface AuthState {
  loggedIn: boolean;
  user: User;
}

export const initialState: AuthState = {
  loggedIn: false,
  user: undefined
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
/*
      // DON'T DO THAT, state IS IMMUTABLE
      state.loggedIn = true;
      state.user = action.payload.user;
      return state;
*/
      // IT's OK !!!
      return {
        loggedIn: true,
        user: action.payload.user
      }
    case AuthActionTypes.LogoutAction:
      return {
        loggedIn: false,
        user: undefined
      }
    default:
      return state;
  }
}
