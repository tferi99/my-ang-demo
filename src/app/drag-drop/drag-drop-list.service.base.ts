import {DraggableItemList} from './drag-drop.model';
import {DndDropEvent, DropEffect} from 'ngx-drag-drop';
import {NGXLogger} from 'ngx-logger';
import {DragDropServiceBase} from './drag-drop-service-base';

export class DragDropListServiceBase<D> extends DragDropServiceBase {
  constructor(logger: NGXLogger) {
    super(logger);
    this.tracing = true;
  }

  //----------------------------------- not usable -----------------------------------
  onCopied(dragZoneId: string, event: DragEvent) {
    throw new Error('Use onCopiedFromList() instead');
  }

  onLinked(dragZoneId: string, event: DragEvent) {
    throw new Error('Use onLinkedFromList() instead');
  }

  onMoved(dragZoneId: string, event: DragEvent) {
    throw new Error('Use onMovedFromList() instead');
  }

  onDragged(dragZoneId: string, event: DragEvent, effect: DropEffect) {
    throw new Error('Use onDraggedFromList() instead');
  }

  onDrop(dropZoneId: string, event: DndDropEvent) {
    throw new Error('Use onDropToList() instead');
  }

  //----------------------------------- methods for lists -----------------------------------
  onCopiedFromList(dragZoneId: string, event: DragEvent, draggedData: D, dragListData: DraggableItemList<D>) {
    this.onDraggedFromList(dragZoneId, event, 'copy', draggedData, dragListData);
  }

  onLinkedFromList(dragZoneId: string, event: DragEvent, draggedData: D, dragListData: DraggableItemList<D>) {
    this.onDraggedFromList(dragZoneId, event, 'link', draggedData, dragListData);
  }

  onMovedFromList(dragZoneId: string, event: DragEvent, draggedData: D, dragListData: DraggableItemList<D>) {
    this.onDraggedFromList(dragZoneId, event, 'move', draggedData, dragListData);
  }


  onDraggedFromList(dragZoneId: string, event: DragEvent, effect: DropEffect, draggedData: D, dragListData: DraggableItemList<D>) {
    this.processOnDragged(dragListData, draggedData, effect);
    super.onDragged(dragZoneId, event, effect);
  }


  onDropToList(dropZoneId: string, event: DndDropEvent, dropListData: DraggableItemList<D>) {
    this.processOnDrop(dropListData, event);
    super.onDrop(dropZoneId, event);
  }

  //----------------------------------- helpers -----------------------------------
  private processOnDragged(dragListData: DraggableItemList<D>, draggedData: D, effect: DropEffect): void {
    if (!dragListData) {
      return;
    }

    const list = dragListData.items;
    if (effect === 'move') {
      const index = list.indexOf(draggedData);
      list.splice(index, 1);
    }
  }

  private processOnDrop(dropListData: DraggableItemList<D>, event: DndDropEvent): void {
    if (!dropListData) {
      return;
    }

    const list = dropListData.items;
    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = list.length;
      }
      list.splice(index, 0, event.data);
    }
  }
}
