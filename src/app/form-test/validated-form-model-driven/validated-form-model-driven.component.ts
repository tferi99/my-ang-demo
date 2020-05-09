import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Gender, Person} from '../../shared/model/person.model';
import {KeyValuePair, stringEnumToKeyValuePairArray} from '../../shared/util/component-helper';
import {CustomValidators} from '../../shared/util/custom-validators';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-validated-form-model-driven',
  templateUrl: './validated-form-model-driven.component.html',
  styleUrls: ['./validated-form-model-driven.component.css']
})
export class ValidatedFormModelDrivenComponent implements OnInit {
  @Output() submitSend: EventEmitter<Person>;
  genders: KeyValuePair<string, string>[];

  form = this.fb.group({
    name: ['', CustomValidators.required],
    // age: [3, [CustomValidators.required, Validators.min(1), Validators.max(200)]],
    age: ['0', [CustomValidators.required, Validators.min(1), , Validators.max(150)]],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', CustomValidators.required]
  });

  // form controls (used in template here)
  name = this.form.controls.name;
  age = this.form.controls.age;
  email = this.form.controls.email;
  gender = this.form.controls.gender;

  constructor(private fb: FormBuilder, private log: NGXLogger) {
    this.submitSend = new EventEmitter<Person>();
    this.submitSend.subscribe((person: Person) => this.log.debug('SENT BACK: ' + JSON.stringify(person)));
    this.genders = stringEnumToKeyValuePairArray(Gender, true);
  }

  ngOnInit() {
  }

  onSubmit() {
    const {name, age, gender} = this.form.controls;             // you can access form controls also this way
    this.log.warn('SUBMITTED: ', this.form);

    const p = new Person(name.value, parseInt(age.value, 10), gender.value);
    this.submitSend.emit(p);
  }

  // -------------------- validators --------------------
  skuValidator(control: FormControl): { [s: string]: boolean } {
    const s = control.value;
    if (!s.match(/^123/)) {
      return {invalidSku: true};
    }
  }

}
