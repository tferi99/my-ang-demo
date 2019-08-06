import {createFeatureSelector, createSelector} from '@ngrx/store';
import {selectCoursesState} from '../../../ngrx/store/course/course.selectors';
import {CoursesState} from '../../../ngrx/store/course/course.reducers';
import {CountersState} from './counter.reducer';

export const selectCountersState = createFeatureSelector<CountersState>('counters');

export const selectCounterById = (id: string) => createSelector(
  selectCountersState,
  state => state.entities[id]
);
