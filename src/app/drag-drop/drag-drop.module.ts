import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './main/main.component';
import {SharedModule} from '../shared/shared.module';
import {DndModule} from 'ngx-drag-drop';
import {FormsModule} from '@angular/forms';
import { DragDropSimpleComponent } from './drag-drop-simple/drag-drop-simple.component';
import { DragDropListComponent } from './drag-drop-list/drag-drop-list.component';

@NgModule({
  declarations: [
    MainComponent,
    DragDropSimpleComponent,
    DragDropListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DndModule,
    FormsModule,
  ]
})
export class DragDropModule { }
