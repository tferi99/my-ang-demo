import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HomePageComponent} from './home-page/home-page.component';
import {EventBroadcastModule} from './event-broadcast/event-broadcast.module';
import {RxjsModule} from './rxjs/rxjs.module';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
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
import {ToastrModule} from 'ngx-toastr';
import {TokenCleanInterceptor} from './core/interceptor/token.interceptor';
import {GridModule} from './grid/grid.module';
import {KeepaliveModule} from './keepalive/keepalive.module';
import {I18nModule} from './i18n/i18n.module';
import {I18n2Module} from './i18n2/i18n2.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ChangeDetectionModule} from './change-detection/change-detection.module';
import {DatabindModule} from './databind/databind.module';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {ContentModule} from './content/content.module';
import {DirectiveModule} from './directive/directive.module';
import {CComponent} from './router-direct/c/c.component';
import {DComponent} from './router-direct/d/d.component';
import {MainComponent} from './router-direct/main/main.component';
import {SharedModule} from './shared/shared.module';
import {Page404Component} from './page404/page404.component';
import { DirectPage404Component } from './router-direct/direct-page404/direct-page404.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/translations_', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CComponent,
    DComponent,
    MainComponent,
    Page404Component,
    DirectPage404Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    EventBroadcastModule,
    RxjsModule,
    GridModule,
    LifecycleModule,
    FormTestModule,
    NgrxModule,
    KeepaliveModule,
    I18nModule,
    I18n2Module,
    ChangeDetectionModule,
    DatabindModule,
    ContentModule,
    DirectiveModule,

    CollapseModule.forRoot(),
    StoreModule.forRoot(reducers, {metaReducers, runtimeChecks: {strictStateImmutability: true, strictActionImmutability: true}}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG}),
    BrowserAnimationsModule,  // for Toastr, datepicker
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    BsDatepickerModule.forRoot(),
    SharedModule
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
