import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'dev-control-status-debug',
  templateUrl: './control-status-debug.component.html',
  styleUrls: ['./control-status-debug.component.css']
})
export class ControlStatusDebugComponent implements OnInit {
  @Input() control!: AbstractControl;
  @Input() element!: HTMLInputElement;
  id!: string;
  errorMsg!: string;

  constructor() {
  }

  ngOnInit() {
    if (this.control === undefined) {
      this.errorMsg = '\'control\' not specified';
      return;
    }
    if (this.element !== undefined && this.element.name !== '') {
      this.id = 'csd-' + this.element.name;
    } else {
      this.id = 'csd-' + this.newGuid();
    }
  }

  getStatusColor(): string {
    switch (this.control.status) {
      case 'INVALID':
        return 'danger';
      case 'VALID':
        return 'success';
      default:
        return 'link';
    }
  }

  getStatusIcon(): string {
    switch (this.control.status) {
      case 'INVALID':
        return 'times';
      case 'VALID':
        return 'check';
      default:
        return 'link';
    }
  }

  private newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      // tslint:disable-next-line:no-bitwise
      const r = Math.random() * 16 | 0;
      // tslint:disable-next-line:no-bitwise
      const v = c === 'x' ? r : ( r & 0x3 | 0x8 );
      return v.toString(16);
    });
  }
}
