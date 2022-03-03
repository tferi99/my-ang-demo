import {DragDropItem} from '../../core/drag-drop/drag-drop.model';

export const SIMPLE_DRAG_DROP_DATA: DragDropItem[] = [
  {
    content: 'testdata',
    effectAllowed: 'copy',
    disable: false,
    handle: false,
  },
  {
    content: 'testdata2',
    effectAllowed: 'move',
    disable: false,
    handle: false,
  },
  {
    content: 'testdata3',
    effectAllowed: 'link',
    disable: false,
    handle: false
  },
  {
    content: 'testdata4',
    effectAllowed: 'copy',
    disable: true,
    handle: false,
  },
  {
    content: 'testdata5',
    effectAllowed: 'copy',
    disable: false,
    handle: true,
  }
];
