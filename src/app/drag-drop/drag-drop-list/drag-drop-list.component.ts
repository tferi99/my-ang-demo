import {Component, Input, OnInit} from '@angular/core';
import {DragDropZone} from '../drag-drop.model';
import {ToastrService} from 'ngx-toastr';
import {DndDropEvent, DropEffect} from 'ngx-drag-drop';

@Component({
  selector: 'dd-drag-drop-list',
  templateUrl: './drag-drop-list.component.html',
  styleUrls: ['./drag-drop-list.component.css']
})
export class DragDropListComponent implements OnInit {
  @Input()
  data: DragDropZone;

  private currentDraggableEvent: DragEvent;
  private currentDragEffectMsg: string;

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
  }

  onDragStart(event: DragEvent) {
    console.log('onDragStart', event);

    this.currentDragEffectMsg = '';
    this.currentDraggableEvent = event;

    this.toastr.info('Drag started!');
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    console.log('onDragged', item, list, effect);

    this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;

    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDragEnd(event: DragEvent) {
    console.log('onDragEnd', event);

    this.currentDraggableEvent = event;
    this.toastr.info(this.currentDragEffectMsg || `Drag ended!`);
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    console.log('onDrop', event, list);

    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = list.length;
      }
      list.splice(index, 0, event.data);
    }
  }
}
