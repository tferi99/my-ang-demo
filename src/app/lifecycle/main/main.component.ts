import {Component, OnInit} from '@angular/core';
import {Gender, Person} from '../../shared/model/person.model';

@Component({
  selector: 'lc-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  private sharedPerson: Person;         // shared with monitor (displed on monitor child component)
  private nonSharedPerson: Person;      // not shared with monitor

  constructor() {
    this.sharedPerson = new Person('John Smith', 1943, Gender.MALE);
    this.nonSharedPerson = new Person('Jane Doe', 1988, Gender.FEMALE);
  }

  ngOnInit() {
  }

}
