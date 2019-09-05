import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {SelectComponent} from './select/select.component';

@NgModule({
  declarations: [MainComponent, SelectComponent],
  imports: [
    CommonModule
  ]
})
export class ChangeDetectionModule { }
