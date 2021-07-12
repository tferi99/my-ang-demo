import { Injectable } from '@angular/core';
import {DragDropComponentBase, DragDropAction} from './drag-drop.model';
import {DndDropEvent} from 'ngx-drag-drop';
import {NGXLogger} from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class DragDropService {
  action: Partial<DragDropAction>;

  constructor(private log: NGXLogger) { }

  onDragStart(event: DragEvent, source: DragDropComponentBase) {
    this.log.info(`[${source.getId()}] onDragStart`, event);

    this.action = {
      dragEvent: event,
      source
    }
  }

  onDrop(event: DndDropEvent, destination: DragDropComponentBase, destinationData: any) {
    this.log.info(`[${destination.getId()}] onDrop`, event, destinationData);

    if (!this.action) {
      this.log.error('No action found for Drop event');
      return;
    }
    this.action.dropEvent = event;
    this.action.destination = destination;
    this.action.destinationData = destinationData;
  }
}
