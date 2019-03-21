import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RxjsPageComponent } from './rxjs-page/rxjs-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GridsterModule } from 'angular-gridster2';
import { GridsterPageComponent } from './gridster-page/gridster-page.component';
import { EventBroadcastModule } from './event-broadcast/event-broadcast.module';
import { LodashModule } from './lodash/lodash.module';
import {RxjsModule} from './rxjs/rxjs.module';

@NgModule({
  declarations: [
    AppComponent,
    RxjsPageComponent,
    HomePageComponent,
    GridsterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    EventBroadcastModule,
    LodashModule,
    RxjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
