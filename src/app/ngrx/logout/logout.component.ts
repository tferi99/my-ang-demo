import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {Logout} from '../auth.actions';
import {Observable} from 'rxjs';
import {User} from '../../shared/model/user.model';
import {isLoggedIn, selectUser} from '../auth.selectors';

@Component({
  selector: 'ngrx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.user$ = this.store.pipe(
      select(selectUser)
    );
  }

  onLogout() {
    this.store.dispatch(new Logout());

    return false;
  }

}
