import { Component, OnInit } from '@angular/core';
import {RxJsLoggingLevel, setRxJsLoggingLevel} from '../../shared/util/log';

interface TabData {
  name: string;
  active: boolean;
}

@Component({
  selector: 'rxj-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  tabData: TabData[] = [
    {name: 'Observables', active: false},
    {name: 'Simple list', active: false},
    {name: 'Imperative filter', active: false},
    {name: 'Reactive filter', active: false},
    {name: 'Flattening', active: false},
    {name: 'Form changes', active: false},
    {name: 'Type-ahead', active: false},
    {name: 'Error handling', active: false},
    {name: 'Logging', active: false},
    {name: 'Sandbox', active: false}
  ];
  activeTab = 4;

  constructor() {
    setRxJsLoggingLevel(RxJsLoggingLevel.DEBUG);
  }

  ngOnInit() {}

  setActiveTab(idx: number) {
    this.activeTab = idx;
    this.tabData.forEach(t => t.active = false);
    this.tabData[idx].active = true;
  }
}
