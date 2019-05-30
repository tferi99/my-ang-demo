import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import * as fromNgrx from './auth.reducer';
import { LogoutComponent } from './logout/logout.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';


@NgModule({
  declarations: [MainComponent, LoginComponent, LogoutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', fromNgrx.authReducer),       // adding module-specific slice of state
    EffectsModule.forFeature([AuthEffects]),
  ]
})
export class NgrxModule { }
