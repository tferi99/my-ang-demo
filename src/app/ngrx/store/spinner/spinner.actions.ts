import { Action } from '@ngrx/store';

export enum SpinnerActionTypes {
  ShowSpinnerAction = '[UI] Show Spinner',
  HideSpinnerAction = '[UI] Hide Spinner'
}

export class ShowSpinnerAction implements Action {
  readonly type = SpinnerActionTypes.ShowSpinnerAction;
  constructor(payload?: any) {}
}

export class HideSpinnerAction implements Action {
  readonly type = SpinnerActionTypes.HideSpinnerAction;
  constructor(payload?: any) {}
}

export type SpinnerActions = ShowSpinnerAction | HideSpinnerAction;

