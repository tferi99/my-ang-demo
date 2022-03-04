import {Component, Input, OnInit} from '@angular/core';
import {NGXLogger} from 'ngx-logger';
import {DragDropListService} from '../drag-drop-list/drag-drop-list.service';

@Component({
  selector: 'dd-drag-drop-rubbish',
  templateUrl: './drag-drop-rubbish.component.html',
  styleUrls: ['./drag-drop-rubbish.component.css']
})
export class DragDropRubbishComponent implements OnInit {
  @Input()
  id!: string;

  dropZoneDummyVal: string[] = [];

  constructor(
    private log: NGXLogger,
    public handler: DragDropListService,
  ) { }

  ngOnInit(): void {
  }
}
