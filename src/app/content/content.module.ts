import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {SharedModule} from '../shared/shared.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [MainComponent, ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ContentModule { }
