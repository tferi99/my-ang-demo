import {DragDropAction, DragDropListZone, DragDropState} from './drag-drop.model';
import {DndDropEvent, DropEffect} from 'ngx-drag-drop';
import {NGXLogger} from 'ngx-logger';
import {Subject} from 'rxjs';
import {AppInjector} from '../core/service/app-injector';

export class DragDropServiceBase<Z, ZID extends keyof Z, D> {
  action?: Partial<DragDropAction<Z, D>>;
  emitter: Subject<DragDropAction<Z, D>> = new Subject<DragDropAction<Z, D>>();

  constructor(private _logger: NGXLogger) {}

  onDragStart(sourceData: Z | undefined, event: DragEvent) {
    this._logger.info(`onDragStart - SourceZone[${sourceZone?.id}]`, event);
    if (!sourceData) {
      return;
    }

    // emitted action
    this.action = {
      dragEvent: event,
      sourceData,
      state: DragDropState.Started
    }
  }

  onDrop(destinationZone: Z | undefined, event: DndDropEvent) {
    this._logger.info(`onDrop - DestinationZone[${destinationZone?k}]`, event);
    if (!destinationZone) {
      return;
    }

    // checking emitted action
    if (!this.action) {
      this._logger.error('No action found for onDrop()');
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

    this._logger.info(`onDrop - Destination[${destinationZone.id}]`, event, destinationZone);
  }

  onDropRubbish(event: DndDropEvent) {
    this._logger.info(`onDrop to rubbish`, event, this.action);
    if (!this.action) {
      return;
    }
    this.action.dropEvent = event;
    this.action.state = DragDropState.DroppedToRubbish;

  }

  onDragged(zone: Z | undefined, data: T, effect: DropEffect) {
    this._logger.info(`onDragged - Zone[${zone?.id}]`, event);
    if (!zone) {
      return;
    }

    // checking emitted action
    if (!this.action) {
      this._logger.error('No action found for onDragged()');
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

    this._logger.info(`[${zone.id}] onDragged with ${effect}`, data);
  }

  onDragEnd(zone: Z | undefined, event: DragEvent) {
    this._logger.info(`[${zone?.id}] onDragEnd`, event);
    if (!zone) {
      return;
    }

    if (!this.action) {
      this._logger.error('No action found for onDragEnd()');
      return;
    }

    // emit
    this.emitter.next(this.action as DragDropAction<Z, T>);
  }
}
