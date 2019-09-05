import {Component, OnInit} from '@angular/core';
import {Gender, Person} from '../../shared/model/person.model';

@Component({
  selector: 'lc-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  private childPerson: Person;

  constructor() {
    this.childPerson = {
      name: 'Ford Prefect',
      born: 3823,
      gender: Gender.NA
    };
  }

  ngOnInit() {
  }

}
