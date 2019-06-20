import { Component, OnInit } from '@angular/core';

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
    {name: 'Observables', active: false},         // 0
    {name: 'Simple list', active: false},         // 1
    {name: 'Imperative filter', active: false},   // 2
    {name: 'Reactive filter', active: false},     // 3
    {name: 'Flattening', active: false},          // 4
    {name: 'Form changes', active: false},        // 5
    {name: 'Type-ahead', active: false},          // 6
    {name: 'Error handling', active: false},      // 7
    {name: 'Custom piped operator', active: false},         // 8
    {name: 'Hot vs Cold', active: false},         // 9
    {name: 'Sandbox', active: false}              // 10
  ];

  activeTab = 7;

  constructor() {}

  ngOnInit() {}

  setActiveTab(idx: number) {
    this.activeTab = idx;
    this.tabData.forEach(t => t.active = false);
    this.tabData[idx].active = true;
  }
}
