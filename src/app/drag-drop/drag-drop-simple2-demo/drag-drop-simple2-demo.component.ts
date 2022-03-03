import { Component, OnInit } from '@angular/core';
import {DndDropEvent} from 'ngx-drag-drop';
import {ToastrService} from 'ngx-toastr';
import {DragDropItem, DragDropListZone} from '../../core/drag-drop/drag-drop.model';
import {SIMPLE_DRAG_DROP_DATA} from '../drag-drop-simple-demo/drag-drop-data';
import {DragDropSimpleService} from './drag-drop-simpe.service';
import {DragDropListConsumerService} from '../drag-drop-list/drag-drop-list-consumer.service';
import {DragDropSimpleConsumerService} from './drag-drop-simple-consumer.service';

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

  dragZone: DragDropListZone<DragDropItem> = {
    id: 'Simple2Zone',
    items: []
  }

  constructor(
    public handler: DragDropSimpleService,
    private consumer: DragDropSimpleConsumerService     // only for instantiating the consumer service
  ) {
    this.dragZone.items = SIMPLE_DRAG_DROP_DATA;
  }

  ngOnInit(): void {
  }

  onDrop(event: DndDropEvent) {
    console.log('DROPPED:', event);
  }
}
