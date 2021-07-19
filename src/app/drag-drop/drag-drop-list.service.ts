import {Injectable} from '@angular/core';
import {DragDropItem} from './drag-drop.model';
import {DragDropListServiceBase} from './drag-drop-list.service-base';

@Injectable({
  providedIn: 'root'
})
export class DragDropListService extends DragDropListServiceBase<DragDropItem> {
  constructor(
  ) {
    super();
  }
}
