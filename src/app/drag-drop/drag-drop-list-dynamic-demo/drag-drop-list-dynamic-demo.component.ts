import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {DndDropEvent, DropEffect} from 'ngx-drag-drop';
import {DragDropZone} from '../drag-drop.model';

@Component({
  selector: 'dd-drag-drop-list-dynamic-demo',
  templateUrl: './drag-drop-list-dynamic-demo.component.html',
  styleUrls: ['./drag-drop-list-dynamic-demo.component.css']
})
export class DragDropListDynamicDemoComponent implements OnInit {
  zones: DragDropZone[] = [
    {
      id: 'LEFT (dyn)',
      items: [
        {
          content: 'Left (dyn)',
          effectAllowed: 'move',
          disable: false,
          handle: false,
        },
        {
          content: 'Lefter (dyn)',
          effectAllowed: 'move',
          disable: false,
          handle: false,
        },
        {
          content: 'Leftest (dyn)',
          effectAllowed: 'copyMove',
          disable: false,
          handle: false
        },
        {
          content: 'Lefty (dyn)',
          effectAllowed: 'move',
          disable: false,
          handle: true,
        }
      ]
    },
    {
      id: 'RIGHT (dyn)',
      items: [
        {
          content: 'I was originally right (dyn)',
          effectAllowed: 'move',
          disable: false,
          handle: false,
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
