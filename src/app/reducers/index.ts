import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {AuthState} from '../ngrx/store/auth/auth.reducer';


export interface AppState {
//  auth?: AuthState;
}


/*export interface AppState {
}*/

export const reducers: ActionReducerMap<AppState> = {
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
