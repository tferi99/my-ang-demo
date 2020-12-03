import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpErrorInterceptor} from './interceptor/http-error.interceptor';
import {ValidatorErrorMessageDirective} from './directive/validator-error-message.directive';

@NgModule({
  declarations: [
    ValidatorErrorMessageDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
  ],
  exports: [
    ValidatorErrorMessageDirective
  ]
})
export class CoreModule {}
