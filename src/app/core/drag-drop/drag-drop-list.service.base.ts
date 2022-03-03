import {DragDropAction, DragDropListZone, DragDropState} from './drag-drop.model';
import {DndDropEvent, DropEffect} from 'ngx-drag-drop';
import {NGXLogger} from 'ngx-logger';
import {Subject} from 'rxjs';
import {AppInjector} from '../service/app-injector';
import {DragDropServiceBase} from './drag-drop-service-base';

export class DragDropListServiceBase<D> extends DragDropServiceBase<DragDropListZone<D>, D> {

  protected zoneToDisplay(zone: DragDropListZone<D> | undefined): string {
    if (!zone) {
      return 'null';
    }
    return zone.id;
  }

  protected processOnDrop(destinationZone: DragDropListZone<D> | undefined, event: DndDropEvent): void {
    if (!destinationZone) {
      return;
    }

    const list = destinationZone.items;
    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = list.length;
      }
      list.splice(index, 0, event.data);
    }
  }
  protected processOnDragged(zone: DragDropListZone<D> | undefined, data: D, effect: DropEffect): void {
    if (!zone) {
      return;
    }

    const list = zone.items;
    if (effect === 'move') {
      const index = list.indexOf(data);
      list.splice(index, 1);
    }
  }
  constructor(logger: NGXLogger) {
    super(logger);
    this.tracing = true;
  }
}
