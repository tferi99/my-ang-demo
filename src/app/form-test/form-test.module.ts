import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {SimpleFormComponent} from './simple-form/simple-form.component';
import {ValidatedFormModelDrivenComponent} from './validated-form-model-driven/validated-form-model-driven.component';
import {ValidatedFormTempDrivenComponent} from './validated-form-temp-driven/validated-form-temp-driven.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { ValidatedFormModelDrivenWithDirComponent } from './validated-form-model-driven-with-dir/validated-form-model-driven-with-dir.component';
import {DirectiveModule} from '../directive/directive.module';
import {CoreModule} from '../core/core.module';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    MainComponent,
    SimpleFormComponent,
    ValidatedFormModelDrivenComponent,
    ValidatedFormTempDrivenComponent,
    ValidatedFormModelDrivenWithDirComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [
    MainComponent
  ]

})
export class FormTestModule { }
