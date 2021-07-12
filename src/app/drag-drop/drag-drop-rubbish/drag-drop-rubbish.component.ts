import {Component, Input, OnInit} from '@angular/core';
import {DndDropEvent} from 'ngx-drag-drop';
import {ToastrService} from 'ngx-toastr';
import {NGXLogger} from 'ngx-logger';
import {DragDropComponentBase} from '../drag-drop.model';

@Component({
  selector: 'dd-drag-drop-rubbish',
  templateUrl: './drag-drop-rubbish.component.html',
  styleUrls: ['./drag-drop-rubbish.component.css']
})
export class DragDropRubbishComponent implements OnInit, DragDropComponentBase {
  @Input()
  id: string;

  constructor(private log: NGXLogger) { }

  ngOnInit(): void {
  }

  onDrop(event: DndDropEvent) {
    this.log.info(`[${this.id}] onDrop on Rubbish`, event);
  }

  getId(): string {
    return this.id;
  }
}
