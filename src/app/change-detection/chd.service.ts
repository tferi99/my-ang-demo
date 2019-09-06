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
    console.log('Current value in service has beemn incremented: ' + this.currentValue);
  }
}
