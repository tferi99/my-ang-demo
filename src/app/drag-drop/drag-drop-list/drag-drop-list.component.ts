import {Component, Input, OnInit} from '@angular/core';
import {DragDropComponentBase, DraggableItem, DragDropListZone, DragDropZone} from '../drag-drop.model';
import {ToastrService} from 'ngx-toastr';
import {DndDropEvent, DropEffect} from 'ngx-drag-drop';
import {NGXLogger} from 'ngx-logger';
import {DragDropListService} from './drag-drop-list.service';
import {DragDropListConsumerService} from './drag-drop-list-consumer.service';

@Component({
  selector: 'dd-drag-drop-list',
  templateUrl: './drag-drop-list.component.html',
  styleUrls: ['./drag-drop-list.component.css']
})
export class DragDropListComponent implements OnInit, DragDropComponentBase {
  @Input()
  id!: string;

  @Input()
  dragZone!: DragDropListZone<string, DraggableItem>;
  dropZone!: DragDropZone<string>

  constructor(
    public handler: DragDropListService,
    private consumer: DragDropListConsumerService    // only for instantiating the consuumer service
  ) {}

  ngOnInit(): void {
  }

  getId(): string {
    if (!this.id) {
      this.id = this.dragZone ? 'List-' + this.dragZone.id : 'List-?';
    }
    return this.id;
  }
}

