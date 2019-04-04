import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [MainComponent, CounterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class ReduxModule { }
