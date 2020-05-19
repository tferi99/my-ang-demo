export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  NA = 'N.A.'
}

export class Person {
  id: number;
  name: string;
  email: string;
  gender: Gender;
  birth?: Date;
  weight?: number;

  constructor() {}
}


