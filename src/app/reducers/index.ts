import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {NgrxState} from '../ngrx/ngrx.reducer';

export interface AppState {
  ngrx?: NgrxState;
}


/*export interface AppState {
}*/

export const reducers: ActionReducerMap<AppState> = {
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
