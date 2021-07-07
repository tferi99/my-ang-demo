import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {DndDropEvent, DropEffect} from 'ngx-drag-drop';

@Component({
  selector: 'app-drag-drop-list',
  templateUrl: './drag-drop-list.component.html',
  styleUrls: ['./drag-drop-list.component.css']
})
export class DragDropListComponent implements OnInit {
  draggableListLeft = [
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
  ];

  private currentDraggableEvent: DragEvent;
  private currentDragEffectMsg: string;

  draggableListRight = [
    {
      content: 'I was originally right',
      effectAllowed: 'move',
      disable: false,
      handle: false,
    }
  ];

  constructor(private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  onDragStart(event: DragEvent) {

    this.currentDragEffectMsg = '';
    this.currentDraggableEvent = event;

    this.toastr.info('Drag started!');
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;

    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDragEnd(event: DragEvent) {
    this.currentDraggableEvent = event;
    this.toastr.info(this.currentDragEffectMsg || `Drag ended!`);
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = list.length;
      }
      list.splice(index, 0, event.data);
    }
  }
}
