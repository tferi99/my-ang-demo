import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {Logout} from '../ngrx.actions';

@Component({
  selector: 'ngrx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onLogout() {
    this.store.dispatch(new Logout());

    return false;
  }

}
