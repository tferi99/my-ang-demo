import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoginService} from '../../core/login.service';
import {User} from '../../shared/model/user.model';
import {tap} from 'rxjs/operators';
import {Login, Logout} from '../auth.actions';
import {FormBuilder, Validators} from '@angular/forms';
import {AppState} from '../../reducers';
import {AuthState} from '../auth.reducer';
import {Router} from '@angular/router';
import {EventBroadcasterLocatorService} from '../../core/event-broadcaster-locator.service';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'ngrx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  private errorFound = false;
  private form;

  constructor(private store: Store<AuthState>, private service: LoginService, private fb: FormBuilder, private router: Router, private log: NGXLogger) {
    this.form = this.fb.group({
        email: ['a@b.c', [Validators.required]],
        password: ['abc', [Validators.required]]
      });
  }

  ngOnInit() {}

  onLogin() {
    const val = this.form.value;

    // submit login page
    this.service.login(val.email, val.password).pipe().subscribe(
      user => {
        this.store.dispatch(new Login({user}))
        this.errorFound = false;
        this.log.debug('next:', user);
        this.router.navigateByUrl('/ngrx');
      },
      err => {
        this.errorFound = true;
        this.log.debug('Error during login', err);
      }
    );
    return false;
  }
}
