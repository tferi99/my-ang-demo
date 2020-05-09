import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLazyRoutingModule } from './router-lazy-routing.module';
import {AComponent} from './a/a.component';
import {BComponent} from './b/b.component';
import { LazyPage404Component } from './lazy-page404/lazy-page404.component';
import {MainComponent} from './main/main.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
    AComponent,
    BComponent,
    LazyPage404Component
  ],
  imports: [
    CommonModule,
    RouterLazyRoutingModule,
    SharedModule
  ]
})
export class RouterLazyModule { }
