import { Component, OnInit } from '@angular/core';
import {Person} from '../../shared/model/person.model';

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

  constructor() { }

  ngOnInit() {
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
