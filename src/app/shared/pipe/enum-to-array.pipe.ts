import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {

  transform(value: any, args: string[]): any {
    const result = [];
    const keys = Object.keys(value);
    const values = Object.values(value);
    for (let  i = 0; i < keys.length; i++) {
      result.push({key: keys[i], value: values[i]});
    }
    return result;
  }
}
