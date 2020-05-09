import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {SharedModule} from '../shared/shared.module';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [MainComponent, BasicHighlightDirective, BetterHighlightDirective],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class DirectiveModule { }
