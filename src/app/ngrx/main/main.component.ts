import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AuthState} from '../store/auth/auth.reducer';
import {map, take, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {isLoggedIn} from '../store/auth/auth.selectors';
import {AppState} from '../../reducers';
import {AllCoursesRequested} from '../store/course/course.actions';
import {NGXLogger} from 'ngx-logger';
import {LocalStorageService} from '../../core/service/local-storage.service';
import {LoginSuccessAction} from '../store/auth/auth.actions';

@Component({
  selector: 'ngrx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<AppState>, private log: NGXLogger, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedIn)
    );

    // simple handling of F5 reload:
    // if user found in local storage, use it
    this.store.select(isLoggedIn).pipe(
      take(1)
    ).subscribe(
      loggedIn => {
        if (!loggedIn) {
          const user = this.localStorageService.getUser();
          if (user) {
            this.log.debug('User found in local storage, keep it logged in: ', user);
            this.store.dispatch(new LoginSuccessAction(user));
          }
        }
      }
    );
  }

  // maybe never called (red button never rendered)
  cleanLocalStorage() {
    this.localStorageService.deleteUser();
    window.location.reload();
  }
}
