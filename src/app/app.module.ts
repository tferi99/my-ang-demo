import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './home-page/home-page.component';
import { GridsterPageComponent } from './gridster-page/gridster-page.component';
import { EventBroadcastModule } from './event-broadcast/event-broadcast.module';
import { LodashModule } from './lodash/lodash.module';
import {RxjsModule} from './rxjs/rxjs.module';
import {ReduxModule} from './redux/redux.module';
import {HttpClientModule} from '@angular/common/http';
import {LifecycleModule} from './lifecycle/lifecycle.module';
import {FormTestModule} from './form-test/form-test.module';
import {NgrxModule} from './ngrx/ngrx.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GridsterPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    EventBroadcastModule,
    LodashModule,
    RxjsModule,
    ReduxModule,
    LifecycleModule,
    FormTestModule,
    NgrxModule,
    StoreModule.forRoot(reducers, { metaReducers, runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG})
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
