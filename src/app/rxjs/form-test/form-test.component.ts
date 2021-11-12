import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {KeyValuePair, stringEnumToKeyValuePairArray} from '../../shared/util/key-value-pair';
import {Gender} from '../../shared/model/person.model';
import {NGXLogger} from 'ngx-logger';
import {ToastrService} from "ngx-toastr";

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
  name = this.form.controls.name as FormControl;
  age = this.form.controls.age as FormControl;
  gender = this.form.controls.gender as FormControl;
  birth = this.form.controls.birth as FormControl;

  constructor(private fb: FormBuilder, private log: NGXLogger, private toastr: ToastrService) {
    this.genders = stringEnumToKeyValuePairArray(Gender, true);
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(this.log.debug);
  }

  onSubmit() {
    this.log.warn('SUBMITTED: ', this.form.value);
    this.toastr.success('Form submitted (see console)');
  }
}
