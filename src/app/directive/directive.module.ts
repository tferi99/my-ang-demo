import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {SharedModule} from '../shared/shared.module';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import {FormsModule} from '@angular/forms';
import {ObjectDirective} from './object-dump.directive';
import { MyIfDirective } from './my-if.directive';
import { NgLoopDirective } from './ng-loop.directive';

@NgModule({
  declarations: [
    MainComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    ObjectDirective,
    MyIfDirective,
    NgLoopDirective
  ],
  exports: [
    NgLoopDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class DirectiveModule { }
