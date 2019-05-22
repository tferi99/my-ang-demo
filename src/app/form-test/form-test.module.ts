import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {SimpleFormComponent} from './simple-form/simple-form.component';
import {ValidatedFormModelDrivenComponent} from './validated-form-model-driven/validated-form-model-driven.component';
import {ValidatedFormTempDrivenComponent} from './validated-form-temp-driven/validated-form-temp-driven.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    MainComponent, SimpleFormComponent, ValidatedFormModelDrivenComponent, ValidatedFormTempDrivenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    MainComponent
  ]

})
export class FormTestModule { }
