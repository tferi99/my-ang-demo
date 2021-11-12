import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Page404Component} from "./page404/page404.component";
import {LifecycleModule} from "./lifecycle/lifecycle.module";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {ToastrModule} from "ngx-toastr";
import {LoggerModule, NgxLoggerLevel} from "ngx-logger";
import {DatabindModule} from "./databind/databind.module";
import {RxjsModule} from "./rxjs/rxjs.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {ChangeDetectionModule} from "./change-detection/change-detection.module";
import {ContentModule} from "./content/content.module";
import {DirectiveModule} from "./directive/directive.module";
import {DragDropModule} from "./drag-drop/drag-drop.module";
import {EventBroadcastModule} from "./event-broadcast/event-broadcast.module";
import {FormTestModule} from "./form-test/form-test.module";
import {GridModule} from "./grid/grid.module";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {NgrxModule} from "./ngrx/ngrx.module";
import {I18nModule} from "./i18n/i18n.module";
import {I18n2Module} from "./i18n2/i18n2.module";
import {KeepaliveModule} from "./keepalive/keepalive.module";
import {M0Module} from "./m0/m0.module";
import {M12Module} from "./m0/m12/m12.module";
import {MainComponent} from './router-direct/main/main.component';
import {CComponent} from "./router-direct/c/c.component";
import {DComponent} from "./router-direct/d/d.component";
import {DirectPage404Component} from "./router-direct/direct-page404/direct-page404.component";
import {ModuleTestComponent} from "./module-test/module-test.component";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/translations_', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    Page404Component,

    // direct route
    MainComponent,
    CComponent,
    DComponent,
    Page404Component,
    DirectPage404Component,
    ModuleTestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,  // for Toastr, datepicker
    ToastrModule.forRoot(),
    LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG, enableSourceMaps: true}),
    BsDatepickerModule.forRoot(),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),

    // feature modules
    CoreModule,
    SharedModule,
    LifecycleModule,
    DatabindModule,
    RxjsModule,
    FontAwesomeModule,
    ChangeDetectionModule,
    ContentModule,
    DirectiveModule,
    DragDropModule,
    EventBroadcastModule,
    FormTestModule,
    GridModule,
    NgrxModule,
    I18nModule,
    I18n2Module,
    KeepaliveModule,
    M0Module,
    M12Module,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
