import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {LodashRoutingModule} from './lodash-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [MainComponent, Page1Component, Page2Component],
  imports: [
    CommonModule,
    LodashRoutingModule
  ],
  exports: [
    MainComponent
  ]
})
export class LodashModule { }
