import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WacGridsterItem, WidgetTypeEnum} from '../grid-api.service';

@Component({
  selector: 'grid-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss']
})
export class WidgetWrapperComponent implements OnInit {
  WidgetTypeEnum = WidgetTypeEnum;  // this way we can reference this from the template

  @Input() gridsterItem!: WacGridsterItem;
  @Input() editable: boolean = false;

  @Output() delete: EventEmitter<WacGridsterItem> = new EventEmitter<WacGridsterItem>();
  @Output() changeType: EventEmitter<WacGridsterItem> = new EventEmitter<WacGridsterItem>();

  constructor() {}

  ngOnInit() {}

  deleteWidget(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.delete.emit(this.gridsterItem);
  }

  onButtonMouseDown(event: MouseEvent) {
    // to prevent propagating drag from delete button
    event.stopPropagation();
  }

  changeWidgetType(type: WidgetTypeEnum) {
    this.gridsterItem.widgetType = type;
    this.changeType.emit(this.gridsterItem);
  }

}
