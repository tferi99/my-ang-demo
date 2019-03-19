import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LodashPageComponent } from './lodash-page/lodash-page.component';
import { RxjsPageComponent } from './rxjs-page/rxjs-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GridsterModule } from 'angular-gridster2';
import { GridsterPageComponent } from './gridster-page/gridster-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LodashPageComponent,
    RxjsPageComponent,
    HomePageComponent,
    GridsterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
