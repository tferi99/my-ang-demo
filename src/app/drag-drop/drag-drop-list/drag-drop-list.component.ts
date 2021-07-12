import {Component, Input, OnInit} from '@angular/core';
import {DragDropComponentBase, DragDropZone} from '../drag-drop.model';
import {ToastrService} from 'ngx-toastr';
import {DndDropEvent, DropEffect} from 'ngx-drag-drop';
import {EventBroadcasterLocatorService} from '../../core/service/event-broadcaster-locator.service';
import {NGXLogger} from 'ngx-logger';
import {DragDropService} from '../drag-drop.service';

@Component({
  selector: 'dd-drag-drop-list',
  templateUrl: './drag-drop-list.component.html',
  styleUrls: ['./drag-drop-list.component.css']
})
export class DragDropListComponent implements OnInit, DragDropComponentBase {
  @Input()
  id: string;

  @Input()
  data: DragDropZone;

  private currentDraggableEvent: DragEvent;
  private currentDragEffectMsg: string;

  constructor(
    private toastr: ToastrService,
    private log: NGXLogger,
    private dragDropService: DragDropService
  ) {}

  ngOnInit(): void {
  }

  onDragStart(event: DragEvent) {
    this.currentDragEffectMsg = '';
    this.currentDraggableEvent = event;

    this.dragDropService.onDragStart(event, this);

    this.toastr.info('Drag started!');
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = list.length;
      }
      list.splice(index, 0, event.data);
    }
    this.dragDropService.onDrop(event, this, list);
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    this.log.info(`[${this.getId()}] onDragged`, item, list, effect);

    this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;

    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
    this.dragDropService.onDragged(event, this, list);
  }

  onDragEnd(event: DragEvent) {
    this.log.info(`[${this.getId()}] onDragEnd`, event);

    this.currentDraggableEvent = event;
    this.toastr.info(this.currentDragEffectMsg || `Drag ended!`);
  }

  getId(): string {
    if (!this.id) {
      this.id = this.data ? 'List-' + this.data.id : 'List-?';
    }
    return this.id;
  }
}

