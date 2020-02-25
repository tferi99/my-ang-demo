export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  NA = 'N.A.'
}

/*
export namespace Gender {
  function asArray(): string[] {
    const arr = [];

    for (const n in Gender) {
      if (typeof Gender[n] === 'string') {
        arr.push(n);
      }
    }
    return arr;
  }
}
*/
export class Person {
  private _name: string;

  constructor(name: string, public born: number, public gender: Gender) {
    this._name = name;
  }

  get name() {
    // uncomment to see change detection in the debugger call stack
    // debugger;

    return this._name;
  }

  set name(name) {
    this._name = name;
  }
}

