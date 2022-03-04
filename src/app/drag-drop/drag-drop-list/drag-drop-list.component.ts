import {Component, Input, OnInit} from '@angular/core';
import {DraggableItem, DraggableItemList} from '../drag-drop.model';
import {DragDropListService} from './drag-drop-list.service';
import {DragDropListConsumerService} from './drag-drop-list-consumer.service';

@Component({
  selector: 'dd-drag-drop-list',
  templateUrl: './drag-drop-list.component.html',
  styleUrls: ['./drag-drop-list.component.css']
})
export class DragDropListComponent implements OnInit {
  @Input()
  id!: string;

  NO_FILTER: string[] = [];

  @Input()
  dragZone!: DraggableItemList<DraggableItem>;

  constructor(
    public handler: DragDropListService,
    private consumer: DragDropListConsumerService    // only for instantiating the consumer service
  ) {}

  ngOnInit(): void {
  }
}

