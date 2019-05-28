import {NgrxState} from './ngrx.reducer';
import {createSelector} from '@ngrx/store';
import {AppState} from '../reducers';


export const selectNgrxState = (state: AppState) => state.ngrx;

export const selectAuthState = (state: NgrxState) => state.auth;

export const isLoggedIn = createSelector(
  selectAuthState,
  st => st.loggedIn
);

export const user = createSelector(
  selectAuthState,
  st => st.user
);



