import { Component, OnInit } from '@angular/core';
import {DndDropEvent} from 'ngx-drag-drop';

@Component({
  selector: 'dd-drag-drop-rubbish',
  templateUrl: './drag-drop-rubbish.component.html',
  styleUrls: ['./drag-drop-rubbish.component.css']
})
export class DragDropRubbishComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onDrop(event: DndDropEvent) {
    console.log('onDrop on Rubbish', event);
  }
}
