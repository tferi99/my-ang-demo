import {DragDropAction, DragDropListZone, DragDropState} from './drag-drop.model';
import {DndDropEvent, DropEffect} from 'ngx-drag-drop';
import {NGXLogger} from 'ngx-logger';
import {Subject} from 'rxjs';
import {AppInjector} from '../service/app-injector';
import {ToastrService} from 'ngx-toastr';

export abstract class DragDropServiceBase<Z, D> {
  action?: Partial<DragDropAction<Z, D>>;
  emitter: Subject<DragDropAction<Z, D>> = new Subject<DragDropAction<Z, D>>();
  protected tracing = false;

  constructor(
    protected _logger: NGXLogger
  ) {}

  protected abstract zoneToDisplay(zone: Z | undefined): string;
  protected abstract processOnDrop(destinationZone: Z | undefined, event: DndDropEvent): void;
  protected abstract processOnDragged(zone: Z | undefined, data: D, effect: DropEffect): void;

  onDragStart(sourceZone: Z | undefined, event: DragEvent) {
    if (this.tracing) {
      this._logger.info(`onDragStart - SourceZone[${this.zoneToDisplay(sourceZone)}]`, event);
    }

    if (!sourceZone) {
      return;
    }

    // emitted action
    this.action = {
      dragEvent: event,
      sourceData: sourceZone,
      state: DragDropState.Started
    }
  }

  onDrop(destinationZone: Z | undefined, event: DndDropEvent) {
    if (this.tracing) {
      this._logger.info(`onDrop - DestinationZone[${this.zoneToDisplay(destinationZone)}]`, event);
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
    this.action.destinationData = destinationZone;
    this.action.dropEvent = event;
    this.action.state = DragDropState.Dropped;

    if (this.tracing) {
      this._logger.info(`onDrop - Destination[${this.zoneToDisplay(destinationZone)}]`, event, destinationZone);
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

  onCopied(zone: Z | undefined, data: D) {
    this.onDragged(zone, data, 'copy');
  }

  onLinked(zone: Z | undefined, data: D) {
    this.onDragged(zone, data,'link');
  }

  onMoved(zone: Z | undefined, data: D) {
    this.onDragged(zone, data,'move');
  }

  onCanceled(zone: Z | undefined, data: D) {
    this.onDragged(zone, data,'none');
  }

  onDragged(zone: Z | undefined, data: D, effect: DropEffect) {
    if (this.tracing) {
      this._logger.info(`onDragged - Zone[${this.zoneToDisplay(zone)}]: ${effect}`);
    }
    if (!zone) {
      return;
    }

    // checking emitted action
    if (!this.action) {
      if (this.tracing) {
        this._logger.error('No action found for onDragged()');
      }
      return;
    }

    this.processOnDragged(zone, data, effect);

    // emitted action
    this.action.draggedData = data;
    this.action.effect = effect;

    if (this.tracing) {
      this._logger.info(`[${this.zoneToDisplay(zone)}] onDragged with ${effect}`, data);
    }
  }

  onDragEnd(zone: Z | undefined, event: DragEvent) {
    if (this.tracing) {
      this._logger.info(`[${this.zoneToDisplay(zone)}] onDragEnd`, event);
    }

    if (!zone) {
      return;
    }

    if (!this.action) {
      if (this.tracing) {
        this._logger.error('No action found for onDragEnd()');
      }
      return;
    }

    // emit
    this.emitter.next(this.action as DragDropAction<Z, D>);
  }
}
