import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlStatusDebugComponent} from './component/control-status-debug/control-status-debug.component';
import {BooleanIconComponent} from './component/boolean-icon/boolean-icon.component';
import { PageHeaderComponent } from './component/page-header/page-header.component';

/**
 * Module for commonly used components/directives/pipes and
 * business model classes.
 */
@NgModule({
  declarations: [
    ControlStatusDebugComponent, BooleanIconComponent, PageHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ControlStatusDebugComponent, PageHeaderComponent
  ]
})
export class SharedModule { }
