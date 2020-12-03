import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Gender, Person} from '../../shared/model/person.model';
import {KeyValuePair, stringEnumToKeyValuePairArray} from '../../shared/util/component-helper';
import {EventBroadcasterLocatorService} from '../../core/service/event-broadcaster-locator.service';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  @Input() title = 'Default';
  @Output() submitSend: EventEmitter<Person>;
  result: string;
  genders: KeyValuePair<string, string>[];

  constructor(private log: NGXLogger) {
    this.submitSend = new EventEmitter<Person>();
    this.submitSend.subscribe((person: Person) => this.log.debug('SENT BACK: ' + JSON.stringify(person)));
    this.genders = stringEnumToKeyValuePairArray(Gender, true);
  }

  ngOnInit() {
  }

  addPerson(name: HTMLInputElement, email: HTMLInputElement, rank: HTMLInputElement, gender: HTMLSelectElement) {
    const p: Person = {id: 0, name: name.value, email: email.value, rank: parseInt(rank.value, 10), gender: gender.value as Gender, active: true};
    this.result = JSON.stringify(p);

    this.submitSend.emit(p);
  }
}
