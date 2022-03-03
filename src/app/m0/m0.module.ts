import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C0Component } from './c0/c0.component';
import {M11Module} from './m11/m11.module';
import {M12Module} from './m12/m12.module';
import {C111AComponent} from './m11/m111/c111-a/c111-a.component';



@NgModule({
  declarations: [C0Component],
  imports: [
    CommonModule,
    M11Module,
    M12Module,
  ],
  exports: [
    C0Component,
    C111AComponent        // this component exported from lower level module (M11)
  ],
})
export class M0Module { }
