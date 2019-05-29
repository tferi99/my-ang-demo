import {createSelector} from '@ngrx/store';
import {AppState} from '../reducers';

// feature selector
export const selectAuthState = (state: AppState) => state.auth;

export const isLoggedIn = createSelector(
  selectAuthState,
  auth => auth.loggedIn
);

export const selectUser = createSelector(
  selectAuthState,
  auth => auth.user
);



