import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLazyRoutingModule } from './router-lazy-routing.module';
import {AComponent} from './a/a.component';
import {BComponent} from './b/b.component';
import { LazyPage404Component } from './lazy-page404/lazy-page404.component';
import {MainComponent} from './main/main.component';
import {SharedModule} from '../shared/shared.module';
import { PersonsComponent } from './persons/persons.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormControlValidationMessageComponent } from './form-control-validation-message/form-control-validation-message.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [
    MainComponent,
    AComponent,
    BComponent,
    LazyPage404Component,
    PersonsComponent,
    PersonDetailComponent,
    PersonEditComponent,
    FormControlValidationMessageComponent
  ],
  imports: [
    CommonModule,
    RouterLazyRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class RouterLazyModule { }
