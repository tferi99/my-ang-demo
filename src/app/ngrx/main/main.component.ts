import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AuthState} from '../auth.reducer';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {isLoggedIn} from '../auth.selectors';
import {AppState} from '../../reducers';
import {AllCoursesRequested} from '../course.actions';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'ngrx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<AppState>, private log: NGXLogger) { }

  ngOnInit() {
    this.store.subscribe(s => this.log.debug('module state: ', s));

    this.isLoggedIn$ = this.store.pipe(
      tap(s => this.log.debug('LOGGED_IN:', s)),
      select(isLoggedIn)
    );
  }
}
