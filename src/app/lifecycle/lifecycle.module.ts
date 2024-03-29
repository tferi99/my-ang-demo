import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DumpAllStateComponent } from './dump-all-state/dump-all-state.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import {SharedModule} from '../shared/shared.module';
import {NgxSpinnerModule} from "ngx-spinner";

@NgModule({
  declarations: [MainComponent, DumpAllStateComponent, ChildComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgxSpinnerModule
  ],
  exports: [
    MainComponent
  ]
})
export class LifecycleModule { }
