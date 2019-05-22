import {FormControl, ValidatorFn, Validators} from '@angular/forms';
import {StringBooleanMap} from './maps';
import * as _ from 'lodash';

export class CustomValidators extends Validators {
  static skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
      return {invalidSku: true};
    }
  }

  /*
  static required(c: FormControl): StringBooleanMap {
    return _.isEmpty(c.value) ? {'required': true} : null;
  }
  */
}
