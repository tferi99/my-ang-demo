import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main/main.component';
import {SharedModule} from '../shared/shared.module';
import {DndModule} from 'ngx-drag-drop';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DndModule,
    FormsModule,
  ]
})
export class DragDropModule { }
