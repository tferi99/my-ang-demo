export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female'
}

export namespace Gender {
  export function asArray(): string[] {
    const arr = [];

    for (const n in Gender) {
      if (typeof Gender[n] === 'string') {
        arr.push(n);
      }
    }
    return arr;
  }
}

export class Person {
  constructor(public name: string, public born: number, public gender: Gender) {}
}

