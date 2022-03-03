import {Injectable} from '@angular/core';
import {DragDropItem, DragDropListZone, DragDropZone} from '../../core/drag-drop/drag-drop.model';
import {DragDropListServiceBase} from '../../core/drag-drop/drag-drop-list.service.base';
import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';
import {DragDropServiceBase} from '../../core/drag-drop/drag-drop-service-base';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';

@Injectable({
  providedIn: 'root'
})
export class DragDropSimpleService extends DragDropServiceBase<DragDropZone<DragDropItem>, DragDropItem> {

  protected zoneToDisplay(zone: DragDropZone<DragDropItem> | undefined): string {
    if (!zone) {
      return 'null';
    }
    return zone.id;
  }

  protected processOnDrop(destinationZone: DragDropZone<DragDropItem> | undefined, event: DndDropEvent): void {
  }
  protected processOnDragged(zone: DragDropZone<DragDropItem> | undefined, data: DragDropItem, effect: DropEffect): void {
  }

  constructor(
    private logger: NGXLogger,
    private toastr: ToastrService
  ) {
    super(logger);
    this.tracing = true;
  }

  onDragStart(zone: DragDropListZone<DragDropItem>, event: DragEvent) {
    super.onDragStart(zone, event);
    this.toastr.info('Drag started!');
  }

  onDragEnd(zone: DragDropListZone<DragDropItem>, event: DragEvent) {
    super.onDragEnd(zone, event);
    this.toastr.info('Drag ended!');
  }
}
