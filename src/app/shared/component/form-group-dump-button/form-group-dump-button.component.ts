import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, FormControl, FormGroup} from '@angular/forms';
import {FormValidatorService} from '../../../core/service/form-validator.service';

/**
 * Put this component into an Angular form and use it for
 * dumping validation errors into console.
 *
 * NOTE: If you put NOT into Angular form then you get a NullInjectorError on console.
 *
 * Input:
 *  - showAlways: (default=false) button only rendered if form is invalid (or always)
 */
@Component({
  selector: 'app-form-group-dump-button',
  templateUrl: './form-group-dump-button.component.html',
  styleUrls: ['./form-group-dump-button.component.scss']
})
export class FormGroupDumpButtonComponent implements OnInit {
  @Input() showAlways = false;
  @Input() additionalClass: string;

  constructor(
    private controlContainer: ControlContainer,
    private formValidatorService: FormValidatorService
  ) {}

  onClick() {
    if (!this.controlContainer || !this.controlContainer.control) {
      console.error('No control found for FormGroupDumpButtonComponent');
      return;
    }
    if (!(this.controlContainer.control instanceof FormGroup)) {
      console.error('Control is not a FormGroup');
      return;
    }
    const form = this.controlContainer.control as FormGroup;

    console.log('FORM:', form);
  }

  ngOnInit(): void {}
}
