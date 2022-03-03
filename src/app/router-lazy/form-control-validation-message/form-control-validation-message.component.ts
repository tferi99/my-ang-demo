import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-control-validation-message',
  templateUrl: './form-control-validation-message.component.html',
  styleUrls: ['./form-control-validation-message.component.scss']
})
export class FormControlValidationMessageComponent implements OnInit {
  @Input() control!: AbstractControl;
  @Input() debug = false;
  @Input() onlyIfTouched = true;
  @Input() options: any = {};

  errorMessage!: string;
  debugMessage!: string;

  constructor() { }

  ngOnInit(): void {
  }

  getMessage(): string | null {
    if (!this.control) {
      this.errorMessage = '[control] not specified';
    } else {
      if (this.debug) {
        this.debugMessage = 'valid: ' + this.control.valid + ', touched: ' + this.control.touched + ', errors: [' + this.getErrors() + ']';
      }
    }

    if ((!this.onlyIfTouched || this.control.touched) && !!this.control.errors) {
      if (this.control.errors['required']) {
        return 'Specify a value!';
      }
      if (this.control.errors['email']) {
        return 'Enter valid email address!';
      }
      if (this.control.errors['min']) {
        return `Minimum value is: ${this.options['min']}`;
      }
      if (this.control.errors['max']) {
        return `Maximum value is: ${this.options['max']}`;
      }
    }
    return null;
  }

  private getErrors(): string {
    if (!this.control || !this.control.errors) {
      return '';
    }

    let errors = '';
    for(const prop in this.control.errors) {
      if (this.control.errors.hasOwnProperty(prop)) {
        if (errors !== '') {
          errors += ',';
        }
        errors += prop;
      }
    }
    return errors;
  }
}
