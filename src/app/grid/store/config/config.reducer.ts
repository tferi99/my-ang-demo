
import { ConfigActions, ConfigActionTypes } from './config.actions';
import {GridsterActionTypes} from '../gridster/gridster.actions';

export interface ConfigState {
  gridEditable: boolean;
}

export const initialState: ConfigState = {
  gridEditable: false
};

export function reducer(state = initialState, action: ConfigActions): ConfigState {
  switch (action.type) {

    case ConfigActionTypes.ToggleGridEditableAction:
      return {
        ...state,
        gridEditable: !state.gridEditable
      };

    default:
      return state;
  }
}
