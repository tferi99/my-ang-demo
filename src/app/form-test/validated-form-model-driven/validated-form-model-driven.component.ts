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
    rank: ['0', [CustomValidators.required, Validators.min(1), Validators.max(10)]],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', CustomValidators.required]
  });

  // form controls (used in template here)
  name = this.form.controls.name;
  rank = this.form.controls.rank;
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
    const {name, email, rank: rank, gender} = this.form.controls;             // you can access form controls also this way
    this.log.warn('SUBMITTED: ', this.form);

    const p: Person = {id: 0, name: name.value, email: email.value,  rank: parseInt(rank.value, 10), gender: gender.value, active: true};
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
