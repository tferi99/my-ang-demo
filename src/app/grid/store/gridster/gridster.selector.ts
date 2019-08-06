// feature selector
// export const selectAuthState0 = state => state.user;
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GridsterState} from './gridster.reducer';

export const selectGridsterState = createFeatureSelector<GridsterState>('gridster');

export const selectGrids = createSelector(
  selectGridsterState,
  gridster => gridster.grids
);


