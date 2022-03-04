import {DndDropEvent, DropEffect, EffectAllowed} from 'ngx-drag-drop';

export interface DraggableItem<C> {
  content: C;
  effectAllowed: EffectAllowed;
  disable: boolean;
  handle: boolean;  // you can start dragging of an element only by catching its sub-element with dndHandle
  type?: string;    // if you want to specify type for typed dropzone
};

export interface Zone<ID> {
  id: string;

}


export interface DragDropZone<ID> {
  id: string;

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
