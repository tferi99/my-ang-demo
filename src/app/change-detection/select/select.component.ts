import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'chd-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent {
  @Input() options = [];

  change() {}
}
