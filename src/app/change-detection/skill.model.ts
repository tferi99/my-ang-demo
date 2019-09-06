export class Skill {
  constructor( private _id: string, private _name: string ) {}

  get id() {
    console.log('Checking id');
    return this._id;
  }

  get name() {
    console.log('Checking name');
    return this._name;
  }
}
