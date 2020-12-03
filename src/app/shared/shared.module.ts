import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlStatusDebugComponent} from './component/control-status-debug/control-status-debug.component';
import {BooleanIconComponent} from './component/boolean-icon/boolean-icon.component';
import {PageHeaderComponent} from './component/page-header/page-header.component';
import {ColorSelectorComponent} from './component/color-selector/color-selector.component';
import {FormsModule} from '@angular/forms';
import {EnumToArrayPipe} from './pipe/enum-to-array.pipe';
import {FormErrorDumpButtonComponent} from './component/form-error-dump-button/form-error-dump-button.component';
import {FormGroupDumpButtonComponent} from './component/form-group-dump-button/form-group-dump-button.component';

/**
 * Module for commonly used components/directives/pipes and
 * business model classes.
 */
@NgModule({
  declarations: [
    ControlStatusDebugComponent,
    BooleanIconComponent,
    PageHeaderComponent,
    ColorSelectorComponent,
    EnumToArrayPipe,
    FormErrorDumpButtonComponent,
    FormGroupDumpButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
    exports: [
      ControlStatusDebugComponent,
      PageHeaderComponent,
      ColorSelectorComponent,
      FormErrorDumpButtonComponent,
      FormGroupDumpButtonComponent
    ]
})
export class SharedModule { }
