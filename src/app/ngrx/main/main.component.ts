import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {NgrxState} from '../ngrx.reducer';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {isLoggedIn, isLoggedOut} from '../ngrx.selectors.ts';

@Component({
  selector: 'ngrx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private store: Store<NgrxState>) { }

  ngOnInit() {
    this.store.pipe(
      tap(state => console.log('Store extracted by component:' + JSON.stringify(state))),
      map(state => state.auth.loggedIn),
      tap(loggedIn => console.log('Logged in (from store):', loggedIn))
    ).subscribe(
    );

    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn)
    );

    this.isLoggedOut$ = this.store.pipe(
      select(isLoggedOut)
    );
  }
}
