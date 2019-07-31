import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngrx-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.sass']
})
export class SearchPanelComponent implements OnInit {
  @Input() color: string;
  @Input() searchPattern: string;

  constructor() { }

  ngOnInit() {
  }

  onSearch() {

  }
}
