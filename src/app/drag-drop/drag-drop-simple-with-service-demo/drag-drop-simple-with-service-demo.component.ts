import {Component, Input, OnInit} from '@angular/core';
import {DndDropEvent} from 'ngx-drag-drop';
import {DragDropAction, DraggableItem} from '../drag-drop.model';
import {SIMPLE_DRAG_DROP_DATA} from '../drag-drop-simple-demo/drag-drop-data';
import {DragDropSimpleService} from './drag-drop-simpe.service';
import {DragDropSimpleConsumerService} from './drag-drop-simple-consumer.service';

/**
 * Simple drag-drop without service.
 */
@Component({
  selector: 'dd-drag-drop-simple-with-service-demo',
  templateUrl: './drag-drop-simple-with-service-demo.component.html',
  styleUrls: ['./drag-drop-simple-with-service-demo.component.css']
})
export class DragDropSimpleWithServiceDemoComponent implements OnInit {
  @Input() dragZoneId!: string;
  @Input() dropZoneId!: string;

  public dropzoneEnabled = true;
  public lastDropEvent!: DragDropAction;

  private currentDraggableEvent?: DragEvent;
  private currentDragEffectMsg?: string;

  dropZoneDummyVal: string[] = [];

  /**
   * Any data can be a drag zone.
   * Drag zone and droppable data can be independent (not-associated).
   */
  items: DraggableItem[] = SIMPLE_DRAG_DROP_DATA;

  constructor(
    public handler: DragDropSimpleService,
    private consumer: DragDropSimpleConsumerService     // only for instantiating the consumer service
  ) {}

  ngOnInit(): void {
    this.handler.emitter.subscribe(actiom => {
      this.lastDropEvent = actiom;
    });
  }
}
