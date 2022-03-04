import {DragDropAction, DragDropState} from './drag-drop.model';
import {DndDropEvent, DropEffect} from 'ngx-drag-drop';
import {NGXLogger} from 'ngx-logger';
import {Subject} from 'rxjs';

export abstract class DragDropServiceBase {
  action?: Partial<DragDropAction>;
  emitter: Subject<DragDropAction> = new Subject<DragDropAction>();
  protected tracing = false;

  constructor(
    protected _logger: NGXLogger
  ) {}

  onDragStart(dragZoneId: string, event: DragEvent) {
    if (this.tracing) {
      this._logger.info(`onDragStart - DragZone[${dragZoneId}]`, event);
    }

    if (!dragZoneId) {
      return;
    }

    // emitted action
    this.action = {
      dragEvent: event,
      dragZoneId: dragZoneId,
      state: DragDropState.Dragged
    }
  }

  onCopied(dragZoneId: string, event: DragEvent) {
    this.onDragged(dragZoneId, event, 'copy');
  }

  onLinked(dragZoneId: string, event: DragEvent) {
    this.onDragged(dragZoneId, event,'link');
  }

  onMoved(dragZoneId: string, event: DragEvent) {
    this.onDragged(dragZoneId, event,'move');
  }

  onCanceled(dragZoneId: string, event: DragEvent) {
    this.onDragged(dragZoneId, event,'none');
  }

  onDragged(dragZoneId: string, event: DragEvent, effect: DropEffect) {
    if (this.tracing) {
      this._logger.info(`onDragged - DragZone[${dragZoneId}] - effect:${effect}`, event);
    }

    // emitted action
    if (this.action) {
      this.action.effect = effect;
    }

    // emit
    if (this.action && this.action.effect == 'none') {
      this.action.state = DragDropState.Cancelled;
      this.emitter.next(this.action as DragDropAction);
      delete this.action;
    }
  }

  onDragOver(dragZoneId: string, event: DragEvent): void {
    if (this.tracing) {
      this._logger.info(`onDragOver - zone[${dragZoneId}]`, event);
    }
  }

  onDragEnd(dragZoneId: string, event: DragEvent) {
    if (this.tracing) {
      this._logger.info(`onDragEnd - [${dragZoneId}]`, event);
    }
  }

  onDrop(dropZoneId: string, event: DndDropEvent) {
    if (this.tracing) {
      this._logger.info(`onDrop - DropZone[${dropZoneId}]`, event);
    }

    // emitted action
    if (this.action) {
      this.action.draggedData = event.data;
      this.action.dropZoneId = dropZoneId;
      this.action.dropEvent = event;
      this.action.state = DragDropState.Dropped;
    }

    // emit
    this.emitter.next(this.action as DragDropAction);
    delete this.action;
  }

  onDropRubbish(event: DndDropEvent) {
    if (this.tracing) {
      this._logger.info(`onDrop to rubbish`, event, this.action);
    }
    if (!this.action) {
      return;
    }
    this.action.dropEvent = event;
    this.action.state = DragDropState.DroppedToRubbish;

    // emit
    this.emitter.next(this.action as DragDropAction);
    delete this.action;
  }
}
