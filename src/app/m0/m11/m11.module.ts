import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {M111Module} from './m111/m111.module';
import {C111Component} from './m111/c111/c111.component';
import { C11Component } from './c11/c11.component';
import {C111AComponent} from './m111/c111-a/c111-a.component';

@NgModule({
  declarations: [C11Component],
  imports: [
    CommonModule,
    M111Module
  ],
  exports: [
    C11Component,
    C111AComponent
  ]
})
export class M11Module { }
