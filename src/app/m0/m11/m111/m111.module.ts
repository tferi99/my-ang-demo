import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C111Component } from './c111/c111.component';
import { C111AComponent } from './c111-a/c111-a.component';
import { C111BComponent } from './c111-b/c111-b.component';



@NgModule({
  declarations: [C111Component, C111AComponent, C111BComponent],
  imports: [
    CommonModule
  ],
  exports: [
    C111Component,
    C111AComponent
  ],
})
export class M111Module { }
