import {DragDropAction, DragDropListZone, DragDropState} from './drag-drop.model';
import {DndDropEvent, DropEffect} from 'ngx-drag-drop';
import {NGXLogger} from 'ngx-logger';
import {Subject} from 'rxjs';
import {AppInjector} from '../core/service/app-injector';

export class DragDropListServiceBase<T> {
  action: Partial<DragDropAction<DragDropListZone<T>, T>>;
  emitter: Subject<DragDropAction<DragDropListZone<T>, T>> = new Subject<DragDropAction<DragDropListZone<T>, T>>();
  log: NGXLogger;

  constructor() {
    const injector = AppInjector.getInjector()
    this.log = injector.get(NGXLogger);
  }

  onDragStart(sourceZone: DragDropListZone<T>, event: DragEvent) {
    this.log.info(`onDragStart - Source[${sourceZone.id}]`, event);

    // emitted action
    this.action = {
      dragEvent: event,
      sourceData: sourceZone,
      state: DragDropState.Started
    }
  }

  onDrop(destinationZone: DragDropListZone<T>, event: DndDropEvent) {
    // checking emitted action
    if (!this.action) {
      this.log.error('No action found for onDrop()');
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

    // emitted action
    this.action.destinationData = destinationZone;
    this.action.dropEvent = event;
    this.action.state = DragDropState.Dropped;

    this.log.info(`onDrop - Destination[${destinationZone.id}]`, event, destinationZone);
  }

  onDropRubbish(event: DndDropEvent) {
    this.action.dropEvent = event;
    this.action.state = DragDropState.DroppedToRubbish;

    this.log.info(`onDrop to rubbish`, event);
  }

  onDragged(zone: DragDropListZone<T>, data: T, effect: DropEffect) {
    // checking emitted action
    if (!this.action) {
      this.log.error('No action found for onDragged()');
      return;
    }

    const list = zone.items;
    if (effect === 'move') {
      const index = list.indexOf(data);
      list.splice(index, 1);
    }

    // emitted action
    this.action.draggedData = data;
    this.action.effect = effect;

    this.log.info(`[${zone.id}] onDragged with ${effect}`, data);
  }

  onDragEnd(zone: DragDropListZone<T>, event: DragEvent) {
    this.log.info(`[${zone.id}] onDragEnd`, event);

    if (!this.action) {
      this.log.error('No action found for onDragEnd()');
      return;
    }

    // emit
    this.emitter.next(this.action as DragDropAction<DragDropListZone<T>, T>);
  }
}
