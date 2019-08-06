import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Counter } from './counter.model';

export enum CounterActionTypes {
  LoadCounters = '[Counter] Load Counters',
  AddCounter = '[Counter] Add Counter',
  UpsertCounter = '[Counter] Upsert Counter',
  AddCounters = '[Counter] Add Counters',
  UpsertCounters = '[Counter] Upsert Counters',
  UpdateCounter = '[Counter] Update Counter',
  UpdateCounters = '[Counter] Update Counters',
  DeleteCounter = '[Counter] Delete Counter',
  DeleteCounters = '[Counter] Delete Counters',
  ClearCounters = '[Counter] Clear Counters',
  IncrementAction = '[Counter] Increment',
  DecrementAction = '[Counter] Decrement'
}

export class LoadCounters implements Action {
  readonly type = CounterActionTypes.LoadCounters;

  constructor(public payload: { counters: Counter[] }) {}
}

export class AddCounter implements Action {
  readonly type = CounterActionTypes.AddCounter;

  constructor(public payload: { counter: Counter }) {}
}

export class UpsertCounter implements Action {
  readonly type = CounterActionTypes.UpsertCounter;

  constructor(public payload: { counter: Counter }) {}
}

export class AddCounters implements Action {
  readonly type = CounterActionTypes.AddCounters;

  constructor(public payload: { counters: Counter[] }) {}
}

export class UpsertCounters implements Action {
  readonly type = CounterActionTypes.UpsertCounters;

  constructor(public payload: { counters: Counter[] }) {}
}

export class UpdateCounter implements Action {
  readonly type = CounterActionTypes.UpdateCounter;

  constructor(public payload: { counter: Update<Counter> }) {}
}

export class UpdateCounters implements Action {
  readonly type = CounterActionTypes.UpdateCounters;

  constructor(public payload: { counters: Update<Counter>[] }) {}
}

export class DeleteCounter implements Action {
  readonly type = CounterActionTypes.DeleteCounter;

  constructor(public payload: { id: string }) {}
}

export class DeleteCounters implements Action {
  readonly type = CounterActionTypes.DeleteCounters;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearCounters implements Action {
  readonly type = CounterActionTypes.ClearCounters;
}

export class IncrementAction implements Action {
  readonly type = CounterActionTypes.IncrementAction;
  constructor(public payload: string) {}
}

export class DecrementAction implements Action {
  readonly type = CounterActionTypes.DecrementAction;
  constructor(public payload: string) {}
}


export type CounterActions =
 LoadCounters
 | AddCounter
 | UpsertCounter
 | AddCounters
 | UpsertCounters
 | UpdateCounter
 | UpdateCounters
 | DeleteCounter
 | DeleteCounters
 | ClearCounters
 | IncrementAction
 | DecrementAction;
