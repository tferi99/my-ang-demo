import {Action} from '@ngrx/store';
import {WacGridster} from '../../grid-api.service';

export enum GridsterActionTypes {
  GridsterLoadRequestedAction = '[Init] GridsterLoadRequested',
  GridsterLoadedAction = '[Init] GridsterLoaded',
  GridsterChangedAction = '[GridsterContainerComponent] GridsterChangedAction',
  GridsterSavedAction = '[GridsterEffects] GridsterSavedAction',
}

export class GridsterLoadRequestedAction implements Action {
  readonly type = GridsterActionTypes.GridsterLoadRequestedAction;
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

export type GridsterActions = GridsterLoadRequestedAction  | GridsterLoadedAction | GridsterChangedAction | GridsterSavedAction;
