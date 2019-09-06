import {Component, Input, OnInit} from '@angular/core';
import {ChdService} from '../chd.service';

@Component({
  selector: 'chd-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass']
})
export class SelectComponent {
  type = 'Default';
  @Input() options = [];

  constructor(private chdService: ChdService) {}

  change() {}

  getChdCurrentValue(): number {
    return this.chdService.getCurrentValue();
  }

  trigger() {}
}
