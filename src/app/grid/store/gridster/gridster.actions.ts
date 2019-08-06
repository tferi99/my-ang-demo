import {Action} from '@ngrx/store';
import {WacGridster} from '../../grid-api.service';

export enum GridsterActionTypes {
  GridsterLoadedAction = '[Init] GridsterLoaded',
  GridsterChangedAction = '[GridsterContainerComponent] GridsterChangedAction',
  GridsterSavedAction = '[GridsterEffects] GridsterSavedAction',
}

export class GridsterLoadedAction implements Action {
  readonly type = GridsterActionTypes.GridsterLoadedAction;
  constructor(public payload: WacGridster) {}
}

export class GridsterChangedAction implements Action {
  readonly type = GridsterActionTypes.GridsterChangedAction;
  constructor(public payload: WacGridster) {}
}

export class GridsterSavedAction implements Action {
  readonly type = GridsterActionTypes.GridsterSavedAction;
  constructor(public payload: WacGridster) {}
}

export type GridsterActions = GridsterLoadedAction | GridsterChangedAction | GridsterSavedAction;
