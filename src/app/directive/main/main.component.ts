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
  displayed = true;

  obj:any = {
    a: 'one',
    b: 'two',
    c: 'three',
    d: 'four'
  };

  arr = [1, 3, 6, 8, 67];

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
