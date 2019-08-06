import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {AuthState} from '../ngrx/store/auth/auth.reducer';
import {CoursesState} from '../ngrx/store/course/course.reducers';


export interface AppState {
  auth?: AuthState;
  courses?: CoursesState;
}

export const reducers: ActionReducerMap<AppState> = {
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
