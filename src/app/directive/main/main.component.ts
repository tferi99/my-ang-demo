import { Component, OnInit } from '@angular/core';
import {SelectableColors} from '../../shared/component/color-selector/color-selector.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  colors = SelectableColors;
  betterDefault = SelectableColors.Gray.valueOf();
  betterHighlight= SelectableColors.Green.valueOf();

  constructor() { }

  ngOnInit(): void {
  }

  betterDefaultChanged(selectedColor: string) {
    this.betterDefault = selectedColor;
  }

  betterHighlightChanged(selectedColor: string) {
    this.betterHighlight = selectedColor;
  }
}
