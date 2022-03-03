import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CoursesState} from '../course/course.reducers';
import {SpinnerState} from './spinner.reducer';

export const getLoadingState  = createFeatureSelector<SpinnerState>('spinner');

export const isLoadingSpinnerActive = createSelector(
  getLoadingState,
  state => state.active
);
