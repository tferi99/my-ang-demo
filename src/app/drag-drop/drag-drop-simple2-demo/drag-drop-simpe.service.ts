import {Injectable} from '@angular/core';
import {DragDropListZone, DragDropZone, DraggableItem} from '../drag-drop.model';
import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';
import {DragDropServiceBase} from '../drag-drop-service-base';
import {DndDropEvent, DropEffect} from 'ngx-drag-drop';

@Injectable({
  providedIn: 'root'
})
export class DragDropSimpleService extends DragDropServiceBase<DragDropZone<string>, string, DraggableItem> {

  protected getDragZoneInfo(dragZone: DragDropZone<string>): string {
    if (!dragZone) {
      return 'null';
    }
    return dragZone.id;
  }

  protected getDropZoneInfo(dropZone: string): string {
    return dropZone;
  }

  protected processOnDragged(dragZone: DragDropZone<string>, data: DraggableItem, effect: DropEffect): void {
  }

  protected processOnDrop(dropZone: string, event: DndDropEvent): void {
  }

  constructor(
    private logger: NGXLogger,
    private toastr: ToastrService
  ) {
    super(logger);
    this.tracing = true;
  }

  onDragStart(dragZone: DragDropListZone<string, DraggableItem>, event: DragEvent) {
    super.onDragStart(dragZone, event);
    this.toastr.info(`Drag started: [${this.getDragZoneInfo(dragZone)}] --->`);
  }

  onDragEnd(dragZone: DragDropListZone<string, DraggableItem>, event: DragEvent) {
    super.onDragEnd(dragZone, event);
    this.toastr.info(`Drag ended: [${this.getDragZoneInfo(dragZone)}] --->`);
  }
}
