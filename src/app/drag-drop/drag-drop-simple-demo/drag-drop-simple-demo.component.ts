import { Component, OnInit } from '@angular/core';
import {DndDropEvent} from 'ngx-drag-drop';
import {ToastrService} from 'ngx-toastr';
import {DragDropItem} from '../drag-drop.model';

@Component({
  selector: 'dd-drag-drop-simple-demo',
  templateUrl: './drag-drop-simple-demo.component.html',
  styleUrls: ['./drag-drop-simple-demo.component.css']
})
export class DragDropSimpleDemoComponent implements OnInit {

  public dropzoneEnabled = true;
  public lastDropEvent: DndDropEvent | null = null;

  private currentDraggableEvent?: DragEvent;
  private currentDragEffectMsg?: string;

  dropZoneDummyVal: string[] = [];

  draggables: DragDropItem[] = [
    {
      content: 'testdata',
      effectAllowed: 'copy',
      disable: false,
      handle: false,
    },
    {
      content: 'testdata2',
      effectAllowed: 'move',
      disable: false,
      handle: false,
    },
    {
      content: 'testdata3',
      effectAllowed: 'link',
      disable: false,
      handle: false
    },
    {
      content: 'testdata4',
      effectAllowed: 'copy',
      disable: true,
      handle: false,
    },
    {
      content: 'testdata5',
      effectAllowed: 'copy',
      disable: false,
      handle: true,
    }
  ];

  draggableWithDragImage = {
    content: 'testdata6',
    effectAllowed: 'copy',
    disable: false,
    handle: true
  };

  constructor(
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
  }

  onDragStart(event: DragEvent) {
//    this.dragDropSimpleService.onDragStart(this.data, event);
    this.lastDropEvent = null;

    this.currentDragEffectMsg = '';
    this.currentDraggableEvent = event;

    this.toastr.info('Drag started!');
  }

  onDragged($event: DragEvent, effect: string) {

    this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;
  }

  onDragEnd(event: DragEvent) {
    this.currentDraggableEvent = event;
    this.toastr.info(this.currentDragEffectMsg || `Drag ended!`);
  }

  onDrop(event: DndDropEvent) {
    this.lastDropEvent = event;
  }
}
