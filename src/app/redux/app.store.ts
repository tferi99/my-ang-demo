import { InjectionToken } from '@angular/core';
import {
  createStore,
  Store,
  compose,
  StoreEnhancer
} from 'redux';

import { AppState } from './app.state';
import { counterReducer as reducer} from './counter.reducer';

export const APP_STORE = new InjectionToken('App.store');

/*const devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;*/

export function createAppStore(): Store<AppState> {
  //return createStore<AppState>(ngrxReducer, compose(devtools));
  //return createStore<AppState>(ngrxReducer);
  return null;
}

export const appStoreProviders = [
   { provide: APP_STORE, useFactory: createAppStore }
];
