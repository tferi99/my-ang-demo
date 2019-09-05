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
    this.childPerson = new Person('Ford Prefect', 3823, Gender.NA);
  }

  ngOnInit() {
  }

}
