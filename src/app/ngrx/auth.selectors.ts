import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../reducers';
import {AuthState} from './auth.reducer';

// feature selector
export const selectAuthState0 = state => state.auth;
export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  selectAuthState,
  auth => auth.loggedIn
);

export const selectUser = createSelector(
  selectAuthState,
  auth => auth.user
);



