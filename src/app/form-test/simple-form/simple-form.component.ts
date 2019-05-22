import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Gender, Person} from '../../shared/model/person.model';
import {KeyValuePair, stringEnumToKeyValuePairArray} from '../../shared/util/component-helper';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  @Input() title = 'Default';
  @Output() onSubmitSend: EventEmitter<Person>;
  result: string;
  genders: KeyValuePair<string, string>[];

  constructor() {
    this.onSubmitSend = new EventEmitter<Person>();
    this.onSubmitSend.subscribe((person: Person) => console.log('SENT BACK: ' + JSON.stringify(person)));
    this.genders = stringEnumToKeyValuePairArray(Gender, true);
  }

  ngOnInit() {
  }

  addPerson(name: HTMLInputElement, age: HTMLInputElement, gender: HTMLInputElement) {
    const p = new Person(name.value, parseInt(age.value, 10), gender.value as Gender);
    this.result = JSON.stringify(p);

    this.onSubmitSend.emit(p);
  }
}
