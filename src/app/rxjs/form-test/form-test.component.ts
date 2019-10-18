import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {KeyValuePair, stringEnumToKeyValuePairArray} from '../../shared/util/key-value-pair';
import {Gender, Person} from '../../shared/model/person.model';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'rxj-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.sass']
})
export class FormTestComponent implements OnInit {
  genders: KeyValuePair<string, string>[];

  form = this.fb.group({
    name: ['', Validators.required],
    age: [3, [Validators.required, Validators.min(1), Validators.max(200)]],
    gender: ['', Validators.required],
    birth: ['', Validators.required]
  });
  name = this.form.controls.name;
  age = this.form.controls.age;
  gender = this.form.controls.gender;
  birth = this.form.controls.birth;

  constructor(private fb: FormBuilder, private log: NGXLogger) {
    this.genders = stringEnumToKeyValuePairArray(Gender, true);
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(this.log.debug);
  }

  onSubmit() {
    this.log.warn('SUBMITTED: ' + this.form.value);

    const p = new Person(this.name.value, parseInt(this.age.value, 10), this.gender.value);
  }
}
