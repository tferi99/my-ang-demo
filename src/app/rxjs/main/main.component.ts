import { Component, OnInit } from '@angular/core';

interface TabData {
  name: string;
  active: boolean;
  route?: string
}

@Component({
  selector: 'rxj-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  tabData: TabData[] = [
    {name: 'Observables', active: false, route: 'observables'},
    {name: 'Simple list', active: false, route: 'simplelist'},
    {name: 'Imperative filter', active: false, route: 'imperativefilter'},
    {name: 'Reactive filter', active: false, route: 'reactivefilter'},
    {name: 'Flattening', active: false, route: 'flattening'},
    {name: 'Form changes', active: false, route: 'form'},
    {name: 'Type-ahead', active: false, route: 'typeahead'},
    {name: 'Error handling', active: false, route: 'errorhandling'},
    {name: 'Custom piped operator', active: false, route: 'custompipe'},
    {name: 'Hot vs Cold', active: false, route: 'hotcold'},
    {name: 'Snippets', active: false, route: 'snippets'},
    {name: 'Counter', active: false, route: 'counter'},
    {name: 'Sandbox', active: false, route: 'sandbox'}
  ];

  activeTab = 10;

  constructor() {}

  ngOnInit() {}

  setActiveTab(idx: number) {
    this.activeTab = idx;
    this.tabData.forEach(t => t.active = false);
    this.tabData[idx].active = true;
  }
}
