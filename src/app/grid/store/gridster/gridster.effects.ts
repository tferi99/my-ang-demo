import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  GridsterActions,
  GridsterActionTypes,
  GridsterChangedAction, GridsterLoadedAction,
  GridsterLoadRequestedAction,
  GridsterSavedAction
} from './gridster.actions';
import {map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {GridApiService} from '../../grid-api.service';

@Injectable()
export class GridsterEffects {
  constructor(private actions$: Actions<GridsterActions>, private gridApiService: GridApiService) {}

  @Effect()
  hrtGridster$ = this.actions$.pipe(
    ofType<GridsterChangedAction>(GridsterActionTypes.GridsterLoadRequestedAction),
    switchMap(action => this.gridApiService.getGrid()),
    map(data => new GridsterLoadedAction(data))
  );

  @Effect()
  gridsterChanged$ = this.actions$.pipe(
    ofType<GridsterChangedAction>(GridsterActionTypes.GridsterChangedAction),
    switchMap(action => this.gridApiService.saveGrid(action.payload)),
    map(savedData => new GridsterSavedAction(savedData)),
  );
}
