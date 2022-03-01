import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {SharedModule} from '../shared/shared.module';
import {DndModule} from 'ngx-drag-drop';
import {FormsModule} from '@angular/forms';
import {DragDropSimpleDemoComponent} from './drag-drop-simple-demo/drag-drop-simple-demo.component';
import {DragDropListDynamicDemoComponent} from './drag-drop-list-dynamic-demo/drag-drop-list-dynamic-demo.component';
import {DragDropListDemoComponent} from './drag-drop-list-demo/drag-drop-list-demo.component';
import {DragDropListComponent} from './drag-drop-list/drag-drop-list.component';
import {DragDropRubbishComponent} from './drag-drop-rubbish/drag-drop-rubbish.component';


@NgModule({
  declarations: [
    MainComponent,
    DragDropSimpleDemoComponent,
    DragDropListDynamicDemoComponent,
    DragDropListDemoComponent,
    DragDropListComponent,
    DragDropRubbishComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DndModule,
    FormsModule,
  ],
  exports: [
    //DragDropListService
  ]
})
export class DragDropModule { }
