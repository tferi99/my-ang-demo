import {Injectable} from '@angular/core';
import {DraggableItem, DraggableItemList} from '../drag-drop.model';
import {DragDropListServiceBase} from '../drag-drop-list.service.base';
import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';
import {DropEffect} from 'ngx-drag-drop';

@Injectable({
  providedIn: 'root'
})
export class DragDropListService extends DragDropListServiceBase<DraggableItem> {
  constructor(
    private logger: NGXLogger,
  ) {
    super(logger);
  }
}
