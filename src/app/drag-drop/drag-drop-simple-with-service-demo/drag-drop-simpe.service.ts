import {Injectable} from '@angular/core';
import {DraggableItem} from '../drag-drop.model';
import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';
import {DragDropServiceBase} from '../drag-drop-service-base';
import {DndDropEvent, DropEffect} from 'ngx-drag-drop';

@Injectable({
  providedIn: 'root'
})
export class DragDropSimpleService extends DragDropServiceBase {

  constructor(
    private logger: NGXLogger,
    private toastr: ToastrService
  ) {
    super(logger);
    this.tracing = true;
  }

  onDragStart(dragZoneId: string, event: DragEvent) {
    super.onDragStart(dragZoneId, event);
    this.toastr.info(`Drag started: [${dragZoneId}] --->`);
  }

  onDragEnd(dragZoneId: string, event: DragEvent) {
    super.onDragEnd(dragZoneId, event);
    this.toastr.info(`Drag ended: [${dragZoneId}] --->`);
  }
}
