import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HomePageComponent} from './home-page/home-page.component';
import {EventBroadcastModule} from './event-broadcast/event-broadcast.module';
import {LodashModule} from './lodash/lodash.module';
import {RxjsModule} from './rxjs/rxjs.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LifecycleModule} from './lifecycle/lifecycle.module';
import {FormTestModule} from './form-test/form-test.module';
import {NgrxModule} from './ngrx/ngrx.module';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {HttpErrorInterceptor} from './core/interceptor/http-error.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {TokenCleanInterceptor} from './core/interceptor/token.interceptor';
import {GridModule} from './grid/grid.module';
import {KeepaliveModule} from './keepalive/keepalive.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
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
    GridModule,
    LifecycleModule,
    FormTestModule,
    NgrxModule,
    KeepaliveModule,
    StoreModule.forRoot(reducers, { metaReducers, runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG}),
    BrowserAnimationsModule,  // for Toastr
    ToastrModule.forRoot(),
  ],
  exports: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenCleanInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
