import {Component, OnInit, Input} from '@angular/core';
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
    this.sharedPerson = {
      name: 'John Smith',
      born: 1942,
      gender: Gender.MALE
    };
    this.nonSharedPerson = {
      name: 'Jane Doe',
      born: 1988,
      gender: Gender.FEMALE
    };
  }

  ngOnInit() {
  }

}
