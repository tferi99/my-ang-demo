import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {DndDropEvent, DropEffect} from 'ngx-drag-drop';
import {DragDropZone} from '../drag-drop.model';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'dd-drag-drop-list-demo-orig',
  templateUrl: './drag-drop-list-demo-orig.component.html',
  styleUrls: ['./drag-drop-list-demo-orig.component.css']
})
export class DragDropListDemoOrigComponent implements OnInit {
  private currentDraggableEvent: DragEvent;
  private currentDragEffectMsg: string;

  draggableListLeft: DragDropZone = {
    id: 'LEFT',
    items: [
      {
        content: 'Left',
        effectAllowed: 'move',
        disable: false,
        handle: false,
      },
      {
        content: 'Lefter',
        effectAllowed: 'move',
        disable: false,
        handle: false,
      },
      {
        content: 'Leftest',
        effectAllowed: 'copyMove',
        disable: false,
        handle: false
      },
      {
        content: 'Lefty',
        effectAllowed: 'move',
        disable: false,
        handle: true,
      }
    ]
  };

  draggableListRight: DragDropZone = {
    id: 'RIGHT',
    items: [
      {
        content: 'I was originally right',
        effectAllowed: 'move',
        disable: false,
        handle: false,
      }
    ]
  };

  constructor(private toastr: ToastrService, private log: NGXLogger) {}

  ngOnInit(): void {
  }

  onDragStart(event: DragEvent) {
    this.log.info('onDragStart', event);

    this.currentDragEffectMsg = '';
    this.currentDraggableEvent = event;

    this.toastr.info('Drag started!');
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    this.log.info('onDragged', item, list, effect);

    this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;

    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDragEnd(event: DragEvent) {
    this.log.info('onDragEnd', event);

    this.currentDraggableEvent = event;
    this.toastr.info(this.currentDragEffectMsg || `Drag ended!`);
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    this.log.info('onDrop', event, list);

    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = list.length;
      }
      list.splice(index, 0, event.data);
    }
  }
}
