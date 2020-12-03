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
  active: boolean;
  birth?: Date;
  rank?: number;

  constructor() {}
}


