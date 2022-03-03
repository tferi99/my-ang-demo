import {DndDropEvent, DropEffect, EffectAllowed} from 'ngx-drag-drop';

export interface DraggableItem {
  content: string;
  effectAllowed: EffectAllowed;
  disable: boolean;
  handle: boolean;
};

export interface DragDropZone<ID> {
  id: ID;
}

export interface DragDropListZone<ID, D> extends DragDropZone<ID> {
  items: D[];
}

export interface DragDropComponentBase {
  getId(): string;
}

export interface DragDropAction<SRC, DEST, D> {
  dragEvent: DragEvent;
  dropEvent: DndDropEvent;
  sourceZone: SRC;
  destinationZone: DEST;
  effect: DropEffect;
  draggedData: D;
  state: DragDropState;
}

export enum DragDropState {
  Started = 'Started',
  Dropped = 'Dropped',
  DroppedToRubbish = 'DroppedToRubbish'
}
