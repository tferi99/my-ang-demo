import {EffectAllowed} from 'ngx-drag-drop';

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
