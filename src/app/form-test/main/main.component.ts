import {Component, OnInit} from '@angular/core';
import {Gender, Person} from '../../shared/model/person.model';

@Component({
  selector: 'frm-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  formDefaultValue = 'This is default value';
  simpleFormResult: string;
  mdFormResult: string;
  tdFormResult: string;
  initial : Person;

  constructor() { }

  ngOnInit() {
    const birth = new Date();
    birth.setTime(birth.getTime() - (30 * 365 * 24 * 3600 * 1000));
    this.initial  = {
      id: 5,
      name: 'John Smith',
      email: 'js@test.org',
      gender: Gender.MALE,
      birth,
      rank: 6,
      active: true
    };
  }

  onSimpleFormSubmitted(person: Person) {
    this.simpleFormResult = JSON.stringify(person);
  }

  onValidatedFormMDSubmitted(person: Person) {
    this.mdFormResult = JSON.stringify(person);
  }

  onValidatedFormTDSubmitted(person: Person) {
    this.tdFormResult = JSON.stringify(person);
  }

}
