import { Component, OnInit } from '@angular/core';
import {DndDropEvent} from 'ngx-drag-drop';
import {ToastrService} from 'ngx-toastr';
import {DragDropItem} from '../../core/drag-drop/drag-drop.model';
import {SIMPLE_DRAG_DROP_DATA} from '../drag-drop-simple-demo/drag-drop-data';
import {DragDropSimpleService} from './drag-drop-simpe.service';

/**
 * Simple drag-drop without service.
 */
@Component({
  selector: 'dd-drag-drop-simple2-demo',
  templateUrl: './drag-drop-simple2-demo.component.html',
  styleUrls: ['./drag-drop-simple2-demo.component.css']
})
export class DragDropSimple2DemoComponent implements OnInit {

  public dropzoneEnabled = true;
  public lastDropEvent: DndDropEvent | null = null;

  private currentDraggableEvent?: DragEvent;
  private currentDragEffectMsg?: string;

  dropZoneDummyVal: string[] = [];

  draggables: DragDropItem[] = SIMPLE_DRAG_DROP_DATA;

  constructor(
    public handler: DragDropSimpleService
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
