import {GridsterActions, GridsterActionTypes} from './gridster.actions';
import {WacGridsterItem} from '../../grid-api.service';

export interface GridsterState {
  grids: Array<WacGridsterItem>;
}

export const initialState: GridsterState = {
  grids: []
};

export function reducer(state = initialState, action: GridsterActions): GridsterState {
  switch (action.type) {

    case GridsterActionTypes.GridsterLoadedAction:
      return {
        grids: action.payload.grids
      };
    case GridsterActionTypes.GridsterSavedAction:
      return {
        ...state,
        grids: action.payload.grids
      };
    default:
      return state;
  }
}

