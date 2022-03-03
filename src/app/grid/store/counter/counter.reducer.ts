import { Counter } from './counter.model';
import { CounterActions, CounterActionTypes } from './counter.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";

export interface CountersState extends EntityState<Counter> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Counter> = createEntityAdapter<Counter>(
);

export const initialState: CountersState = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: CounterActions
): CountersState {
  switch (action.type) {
    case CounterActionTypes.AddCounter: {
      return adapter.addOne(action.payload.counter, state);
    }

    case CounterActionTypes.UpsertCounter: {
      return adapter.upsertOne(action.payload.counter, state);
    }

    case CounterActionTypes.AddCounters: {
      return adapter.addMany(action.payload.counters, state);
    }

    case CounterActionTypes.UpsertCounters: {
      return adapter.upsertMany(action.payload.counters, state);
    }

    case CounterActionTypes.UpdateCounter: {
      return adapter.updateOne(action.payload.counter, state);
    }

    case CounterActionTypes.UpdateCounters: {
      return adapter.updateMany(action.payload.counters, state);
    }

    case CounterActionTypes.DeleteCounter: {
      return adapter.removeOne(action.payload.id, state);
    }

    case CounterActionTypes.DeleteCounters: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case CounterActionTypes.LoadCounters: {
      return adapter.setAll(action.payload.counters, state);
    }

    case CounterActionTypes.ClearCounters: {
      return adapter.removeAll(state);
    }

    case CounterActionTypes.IncrementAction: {
      const c = state.entities[action.payload];
      if (c) {
        return adapter.updateOne({id: action.payload, changes: {value: c.value + 1}}, state);
      }
      return state;
    }

    case CounterActionTypes.DecrementAction: {
      const c = state.entities[action.payload];
      if (c) {
        return adapter.updateOne({id: action.payload, changes: {value: c.value - 1}}, state);
      }
      return state;
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
