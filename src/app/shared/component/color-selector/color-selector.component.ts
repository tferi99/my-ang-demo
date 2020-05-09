import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export enum SelectableColors {
  Transparent = 'transparent',
  Gray = 'gray',
  Red = 'red',
  Green = 'lightgreen',
  Yellow = 'yellow',
  Blue = 'lightblue'
}

@Component({
  selector: 'dev-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.css']
})
export class ColorSelectorComponent implements OnInit {
  colors = SelectableColors;
  @Input() color = SelectableColors.Transparent;
  @Output() changed = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.onColorChanged({});      // default value emitted
  }

  onColorChanged($event: any) {
    this.changed.emit(this.color);
  }
}
