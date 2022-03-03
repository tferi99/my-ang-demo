import { Action } from '@ngrx/store';
import {GridsterActionTypes} from '../gridster/gridster.actions';

export enum ConfigActionTypes {
  ToggleGridEditableAction = '[Nav] ToggleGridEditable',
}

export class ToggleGridEditableAction implements Action {
  readonly type = ConfigActionTypes.ToggleGridEditableAction;
}

export type ConfigActions = ToggleGridEditableAction;
