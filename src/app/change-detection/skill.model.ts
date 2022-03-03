export class Skill {
  constructor( private _id: string, private _name: string ) {}

  get id() {
    console.log('Checking id << change detection');
    return this._id;
  }

  get name() {
//    console.log('Checking name << change detection');
    return this._name;
  }
}
