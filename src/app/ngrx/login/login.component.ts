import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {LoginService} from '../../core/service/login.service';
import {LoginAction} from '../auth.actions';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthState} from '../auth.reducer';
import {NGXLogger} from 'ngx-logger';
import {Observable, Subscription} from 'rxjs';
import {selectAuthState} from '../auth.selectors';

@Component({
  selector: 'ngrx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit, OnDestroy {
  private errorFound = false;
  private form;
  private auth: Observable<AuthState>;
  private authSub: Subscription;

  constructor(private store: Store<AuthState>, private service: LoginService, private fb: FormBuilder, private log: NGXLogger) {
    this.form = this.fb.group({
        email: ['a@b.c', [Validators.required]],
        password: ['abc', [Validators.required]]
      });
  }

  ngOnInit() {
    this.auth = this.store.pipe(
      select(selectAuthState)
    );
/*    this.authSub = this.store.pipe(
      select(selectAuthState)
    ).subscribe(
      auth =>
    );*/
  }

  ngOnDestroy(): void {
  }

  onLogin() {
    const val = this.form.value;
    this.store.dispatch(new LoginAction({email: val.email, password: val.password}));

/*    // submit login page
    this.service.login(val.email, val.password).pipe().subscribe(
      user => {
        this.store.dispatch(new LoginAction({user}))
        this.errorFound = false;
        this.log.debug('next:', user);
        this.router.navigateByUrl('/ngrx');
      },
      err => {
        this.errorFound = true;
        this.log.debug('Error during login', err);
      }
    );
 */
    return false;
  }

}
