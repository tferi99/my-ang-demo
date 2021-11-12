import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {LogoutAction} from '../store/auth/auth.actions';
import {Observable} from 'rxjs';
import {User} from '../../shared/model/user.model';
import {selectUser} from '../store/auth/auth.selectors';
import {Router} from '@angular/router';

@Component({
  selector: 'ngrx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {
  user$!: Observable<User | undefined>;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.user$ = this.store.pipe(
      select(selectUser)
    );
  }

  onLogout() {
    this.store.dispatch(new LogoutAction());
    this.router.navigateByUrl('/ngrx/login');

    return false;
  }

}
