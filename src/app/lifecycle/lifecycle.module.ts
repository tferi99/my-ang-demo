import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DumpAllStateComponent } from './dump-all-state/dump-all-state.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, DumpAllStateComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainComponent
  ]
})
export class LifecycleModule { }
