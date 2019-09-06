import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {SelectComponent} from './select/select.component';
import {SelectOnPushComponent} from './select/select-on-push.component';
import {ChdService} from './chd.service';

@NgModule({
  declarations: [MainComponent, SelectComponent, SelectOnPushComponent],
  imports: [
    CommonModule
  ],
  providers: [
    ChdService
  ]
})
export class ChangeDetectionModule { }
