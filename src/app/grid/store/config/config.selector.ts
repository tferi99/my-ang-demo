// feature selector
// export const selectAuthState0 = state => state.user;
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ConfigState} from './config.reducer';

export const selectConfigState = createFeatureSelector<ConfigState>('config');

export const selectGridEditable = createSelector(
  selectConfigState,
  gridster => gridster.gridEditable
);

