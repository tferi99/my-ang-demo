import {Injectable} from '@angular/core';
import {DragDropState} from '../drag-drop.model';
import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';
import {DragDropServiceBase} from '../drag-drop-service-base';
import {DndDropEvent} from 'ngx-drag-drop';

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
    this.emitter.subscribe(
      action => {
        if (action.state == DragDropState.Cancelled) {
          this.toastr.error(`[${action?.draggedData}]</br>${action?.dragZoneId}</br>--&gt;</br>${action?.dropZoneId}`, `Cancelled [${action?.effect}]`, {
            enableHtml: true
          });
        } else {
          this.toastr.warning(`[${action?.draggedData}]</br>${action?.dragZoneId}</br>--&gt;</br>${action?.dropZoneId}`, `Dropped [${action?.effect}]`, {
            enableHtml: true
          });
        }
      });
  }

  onDragStart(dragZoneId: string, event: DragEvent) {
    super.onDragStart(dragZoneId, event);
    this.toastr.info(`Drag started: [${dragZoneId}] --->`);
  }

/*  onDragEnd(dragZoneId: string, event: DragEvent) {
    super.onDragEnd(dragZoneId, event);
    this.toastr.info(`Drag ended: [${dragZoneId}] --->`);
  }*/

  onDrop(dropZoneId: string, event: DndDropEvent) {
    super.onDrop(dropZoneId, event);

  }
}
