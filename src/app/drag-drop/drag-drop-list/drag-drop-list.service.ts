import {Injectable} from '@angular/core';
import {DraggableItem, DragDropListZone} from '../drag-drop.model';
import {DragDropListServiceBase} from '../drag-drop-list.service.base';
import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DragDropListService extends DragDropListServiceBase<DraggableItem> {
  constructor(
    private logger: NGXLogger,
    private toastr: ToastrService
  ) {
    super(logger);
  }

  onDragStart(sourceZone: DragDropListZone<DraggableItem>, event: DragEvent) {
    super.onDragStart(sourceZone, event);

    this.toastr.info('Drag started!');
  }

  onDragEnd(zone: DragDropListZone<DraggableItem>, event: DragEvent) {
    super.onDragEnd(zone, event);

    this.toastr.info('Drag ended!');
  }
}
