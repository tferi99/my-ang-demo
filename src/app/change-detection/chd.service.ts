import {Injectable} from '@angular/core';

@Injectable()
export class ChdService {
  private currentValue = 0;

  constructor() {}

  getCurrentValue() {
    return this.currentValue;
  }

  incrementCurrentValue() {
    this.currentValue++;
    console.log('An external background Observable emitted a new value: ' + this.currentValue);
  }
}
