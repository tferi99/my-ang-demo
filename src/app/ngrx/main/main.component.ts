import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {NgrxState} from '../ngrx.reducer';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {isLoggedIn} from '../ngrx.selectors.ts';
import {AppState} from '../../reducers';

@Component({
  selector: 'ngrx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<NgrxState>, private globalStore: Store<AppState>) { }

  ngOnInit() {
    this.globalStore.subscribe(s => console.log('global state: ', s));
    this.store.subscribe(s => console.log('module state: ', s));

    this.isLoggedIn$ = this.globalStore.pipe(
      map(state => state.ngrx.auth.loggedIn),
    );

/*    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn)
    );

    this.isLoggedOut$ = this.store.pipe(
      select(isLoggedOut)
    );*/
  }
}
