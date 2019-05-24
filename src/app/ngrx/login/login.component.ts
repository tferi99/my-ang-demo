import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoginService} from '../../core/login.service';
import {User} from '../../shared/model/user.model';
import {tap} from 'rxjs/operators';
import {Login, Logout} from '../ngrx.actions';
import {FormBuilder, Validators} from '@angular/forms';
import {AppState} from '../../reducers';
import {NgrxState} from '../ngrx.reducer';

@Component({
  selector: 'ngrx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  private errorFound = false;
  private form;

  constructor(private store: Store<NgrxState>, private service: LoginService, private fb: FormBuilder) {
    this.form = this.fb.group({
        email: ['a@b.c', [Validators.required]],
        password: ['abc', [Validators.required]]
      });
  }

  ngOnInit() {
    this.store.subscribe(
      state => console.log('LoginComponent INIT:', state)
    );
  }

  onLogin() {
    const val = this.form.value;

    this.service.login(val.email, val.password).pipe(
      tap(data => console.log('LoginComponent:', data))
    ).subscribe(
      user => {
        this.store.dispatch(new Login({user}))
        this.errorFound = false;
        console.log('next:', user);
      },
      err => {
        this.errorFound = true;
        console.log('Error during login', err);
      }
    );
    return false;
  }
}
