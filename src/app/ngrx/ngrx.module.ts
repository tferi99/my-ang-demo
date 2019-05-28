import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import * as fromNgrx from './ngrx.reducer';
import { LogoutComponent } from './logout/logout.component';
import { EffectsModule } from '@ngrx/effects';
import { NgrxEffects } from './ngrx.effects';


@NgModule({
  declarations: [MainComponent, LoginComponent, LogoutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('ngrx', fromNgrx.ngrxReducer),       // adding module-specific slice of state
    EffectsModule.forFeature([NgrxEffects]),
  ]
})
export class NgrxModule { }
