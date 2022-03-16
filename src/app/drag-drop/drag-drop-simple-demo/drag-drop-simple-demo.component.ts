import { Component, OnInit } from '@angular/core';
import {DndDropEvent} from 'ngx-drag-drop';
import {ToastrService} from 'ngx-toastr';
import {DraggableItem} from '../drag-drop.model';
import {SIMPLE_DRAG_DROP_DATA} from './drag-drop-data';

/**
 * Simple drag-drop without service.
 */
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

  draggables = SIMPLE_DRAG_DROP_DATA;

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
