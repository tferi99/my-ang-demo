import {DragDropAction, DragDropListZone, DragDropState} from './drag-drop.model';
import {DndDropEvent, DropEffect} from 'ngx-drag-drop';
import {NGXLogger} from 'ngx-logger';
import {Subject} from 'rxjs';
import {AppInjector} from '../service/app-injector';
import {ToastrService} from 'ngx-toastr';

export interface DragDropHandler<SRC, DEST, D> {
  // drag
  onDragStart(sourceZone: SRC, event: DragEvent): void;
  onCopied(zone: SRC, data: D): void;
  onLinked(zone: SRC, data: D): void;
  onMoved(zone: SRC, data: D): void;
  onCanceled(zone: SRC, data: D): void;
  onDragged(zone: SRC, data: D, effect: DropEffect): void;
  onDragEnd(zone: SRC, event: DragEvent): void;
  onDragOver(zone: SRC, event: DragEvent): void;

  // drop
  onDrop(destinationZone: DEST, event: DndDropEvent): void;
  onDropRubbish(event: DndDropEvent): void;
}

export abstract class DragDropServiceBase<DRAG, DROP, D> implements DragDropHandler<DRAG, DROP, D> {
  action?: Partial<DragDropAction<DRAG, DROP, D>>;
  emitter: Subject<DragDropAction<DRAG, DROP, D>> = new Subject<DragDropAction<DRAG, DROP, D>>();
  protected tracing = false;

  constructor(
    protected _logger: NGXLogger
  ) {}

  protected abstract getDragZoneInfo(zone: DRAG): string;
  protected abstract processOnDragged(zone: DRAG, data: D, effect: DropEffect): void;

  protected abstract getDropZoneInfo(zone: DROP): string;
  protected abstract processOnDrop(destinationZone: DROP, event: DndDropEvent): void;

  onDragStart(sourceZone: DRAG, event: DragEvent) {
    if (this.tracing) {
      this._logger.info(`onDragStart - SourceZone[${this.getDragZoneInfo(sourceZone)}]`, event);
    }

    if (!sourceZone) {
      return;
    }

    // emitted action
    this.action = {
      dragEvent: event,
      sourceZone: sourceZone,
      state: DragDropState.Started
    }
  }

  onCopied(sourceZone: DRAG, data: D) {
    if (this.tracing) {
      this._logger.info(`onCopied - zone[${this.getDragZoneInfo(sourceZone)}]`, this.action);
    }
    this.onDragged(sourceZone, data, 'copy');
  }

  onLinked(sourceZone: DRAG, data: D) {
    if (this.tracing) {
      this._logger.info(`onLinked - zone[${this.getDragZoneInfo(sourceZone)}]`, this.action);
    }
    this.onDragged(sourceZone, data,'link');
  }

  onMoved(sourceZone: DRAG, data: D) {
    if (this.tracing) {
      this._logger.info(`onMoved - zone[${this.getDragZoneInfo(sourceZone)}]`, this.action);
    }
    this.onDragged(sourceZone, data,'move');
  }

  onCanceled(sourceZone: DRAG, data: D) {
    if (this.tracing) {
      this._logger.info(`onCanceled - zone[${this.getDragZoneInfo(sourceZone)}]`, this.action);
    }
    this.onDragged(sourceZone, data,'none');
  }

  onDragged(sourceZone: DRAG, data: D, effect: DropEffect) {
    if (this.tracing) {
      this._logger.info(`onDragged - Zone[${this.getDragZoneInfo(sourceZone)}] - effect:${effect}, data:`, data);
    }
    if (!sourceZone) {
      return;
    }

    // checking emitted action
    if (!this.action) {
      if (this.tracing) {
        this._logger.error('No action found for onDragged()');
      }
      return;
    }

    this.processOnDragged(sourceZone, data, effect);

    // emitted action
    this.action.draggedData = data;
    this.action.effect = effect;
  }

  onDragOver(zone: DRAG, event: DragEvent): void {
    if (this.tracing) {
      this._logger.info(`onDragOver - zone[${this.getDragZoneInfo(zone)}]`, event);
    }
  }

  onDragEnd(sourceZone: DRAG, event: DragEvent) {
    if (this.tracing) {
      this._logger.info(`[${this.getDragZoneInfo(sourceZone)}] onDragEnd`, event);
    }

    if (!sourceZone) {
      return;
    }

    if (!this.action) {
      if (this.tracing) {
        this._logger.error('No action found for onDragEnd()');
      }
      return;
    }

    // emit
    this.emitter.next(this.action as DragDropAction<DRAG, DROP, D>);
  }

  onDrop(destinationZone: DROP, event: DndDropEvent) {
    if (this.tracing) {
      this._logger.info(`onDrop - DestinationZone[${this.getDropZoneInfo(destinationZone)}]`, event);
    }

    if (!destinationZone) {
      return;
    }

    // checking emitted action
    if (!this.action) {
      if (this.tracing) {
        this._logger.error('No action found for onDrop()');
      }
      return;
    }

    this.processOnDrop(destinationZone, event);

    // emitted action
    this.action.destinationZone = destinationZone;
    this.action.dropEvent = event;
    this.action.state = DragDropState.Dropped;

    if (this.tracing) {
      this._logger.info(`onDrop - Destination[${this.getDropZoneInfo(destinationZone)}]`, event, destinationZone);
    }
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
  }
}
