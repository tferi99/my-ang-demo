import {Component, OnInit} from '@angular/core';
import {Gender, Person} from '../../shared/model/person.model';

@Component({
  selector: 'lc-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  childPerson: Person;

  constructor() {
    this.childPerson ={id: 42, name: 'Ford Prefect', email: 'fp@universe.org', rank: 83 , gender: Gender.NA, active: true};
  }

  ngOnInit() {
  }

}
