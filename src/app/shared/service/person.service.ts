import {Injectable} from '@angular/core';
import {Gender, Person} from '../model/person.model';
import * as _ from 'lodash';

const data: Person[] = [
  {id: 1, name: 'John Smith', email: 'js@abc.com', gender: Gender.MALE, birth: new Date('1976-03-12'), rank: 78, active: true},
  {id: 2, name: 'Jane Doe', email: 'jd@home.org', gender: Gender.FEMALE, birth: new Date('1988-09-21'), active: true},
];

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  data: Person[] = data;
  constructor() { }

  getAll(): Person[] {
    return _.cloneDeep(this.data);
  }

  get(id: number): Person {
    const found = _.find(this.data, ['id', id]) as Person;
    const ret = {...found};
    console.log(`Person retrieved by id[${id}]`, ret);
    return ret;
  }

  create(person: Person): Person {
    person.id = this.getNewId();
    this.data.push(person);
    return person;
  }

  update(person: Person): void {

  }

  private getNewId(): number {
    const newNum = _.maxBy(this.data, 'id')?.id;
    if (!newNum) {
      return 1000000;
    }
    return newNum;
  }
}
