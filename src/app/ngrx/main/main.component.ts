import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AuthState} from '../auth.reducer';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {isLoggedIn} from '../auth.selectors';
import {AppState} from '../../reducers';

@Component({
  selector: 'ngrx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(s => console.log('module state: ', s));

    this.isLoggedIn$ = this.store.pipe(
      tap(s => console.log('LOGGED_IN:', s)),
      select(isLoggedIn)
    );
  }
}
