import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {ConfigActions} from './config.actions';


@Injectable()
export class ConfigEffects {

  constructor(private actions$: Actions<ConfigActions>) {}

}
