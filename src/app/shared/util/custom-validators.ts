import {FormControl, Validators} from '@angular/forms';

export class CustomValidators extends Validators {
  static skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
      return {invalidSku: true};
    }
    return {invalidSku: false};
  }

  /*
  static required(c: FormControl): StringBooleanMap {
    return _.isEmpty(c.value) ? {'required': true} : null;
  }
  */
}
