import {DndDropEvent, DropEffect, EffectAllowed} from 'ngx-drag-drop';

export interface DragDropItem {
  content: string;
  effectAllowed: EffectAllowed;
  disable: boolean;
  handle: boolean;
};

export interface DragDropZone {
  id: string;
  items: DragDropItem[];
}

export interface DragDropComponentBase {
  getId(): string;
}

export interface DragDropAction {
  dragEvent: DragEvent;
  dropEvent: DndDropEvent;
  source: DragDropComponentBase;
  sourceData: any;
  destination: DragDropComponentBase;
  destinationData: any;
  effect: DropEffect;
  draggedData: any;
}
