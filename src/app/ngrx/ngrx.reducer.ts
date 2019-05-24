import {NgrxActions, NgrxActionTypes} from './ngrx.actions';
import {User} from '../shared/model/user.model';


export interface NgrxState {
  loggedIn: boolean;
  user: User;
}

export const initialState: NgrxState = {
  loggedIn: false,
  user: undefined
};

export function ngrxReducer(state = initialState, action: NgrxActions): NgrxState {
  switch (action.type) {
    case NgrxActionTypes.LoginAction:
      return {
        loggedIn: true,
        user: action.payload.user
      }
    case NgrxActionTypes.LogoutAction:
      return {
        loggedIn: false,
        user: undefined
      }
    default:
      return state;
  }
}
