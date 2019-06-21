import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators, ValidatorFn, FormControl} from '@angular/forms';
import {Gender, Person} from '../../shared/model/person.model';
import {KeyValuePair, stringEnumToKeyValuePairArray} from '../../shared/util/component-helper';
import {CustomValidators} from '../../shared/util/custom-validators';
import {EventBroadcasterLocatorService} from '../../core/service/event-broadcaster-locator.service';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-validated-form-model-driven',
  templateUrl: './validated-form-model-driven.component.html',
  styleUrls: ['./validated-form-model-driven.component.css']
})
export class ValidatedFormModelDrivenComponent implements OnInit {
  @Output() onSubmitSend: EventEmitter<Person>;
  genders: KeyValuePair<string, string>[];

  form = this.fb.group({
    name: ['', CustomValidators.required],
    //age: [3, [CustomValidators.required, Validators.min(1), Validators.max(200)]],
    age: ['0', [CustomValidators.required, Validators.min(1), , Validators.max(150)]],
    gender: ['', CustomValidators.required]
  });
  name = this.form.controls['name'];
  age = this.form.controls['age'];
  gender = this.form.controls['gender'];

  constructor(private fb: FormBuilder, private log: NGXLogger) {
    this.onSubmitSend = new EventEmitter<Person>();
    this.onSubmitSend.subscribe((person: Person) => this.log.debug('SENT BACK: ' + JSON.stringify(person)));
    this.genders = stringEnumToKeyValuePairArray(Gender, true);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.log.warn('SUBMITTED: ' + this.form.value);

    const p = new Person(this.name.value, parseInt(this.age.value, 10), this.gender.value);
    this.onSubmitSend.emit(p);

    //this.form.valueChanges
  }

  // -------------------- validators --------------------
  skuValidator(control: FormControl): { [s: string]: boolean } {
    const s = control.value;
    if (!s.match(/^123/)) {
      return {invalidSku: true};
    }
  }

}
