import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ControlStatusDebugComponent} from './component/control-status-debug/control-status-debug.component';
import {BooleanIconComponent} from './component/boolean-icon/boolean-icon.component';

/**
 * Module for commonly used components/directives/pipes and
 * business model classes.
 *
 * RULE:
 * - Put every components/directives/pipes into it's own directory.
 * - Put general services directly into this directory.
 */
@NgModule({
  declarations: [
    ControlStatusDebugComponent, BooleanIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ControlStatusDebugComponent
  ]
})
export class SharedModule { }
