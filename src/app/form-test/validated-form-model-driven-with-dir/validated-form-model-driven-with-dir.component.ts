import {Component, Input, OnInit} from '@angular/core';
import {KeyValuePair, stringEnumToKeyValuePairArray} from '../../shared/util/component-helper';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Gender, Person} from '../../shared/model/person.model';
import {CustomValidators} from '../../shared/util/custom-validators';
import {FormValidatorService} from '../../core/service/form-validator.service';

@Component({
  selector: 'app-validated-form-model-driven-with-dir',
  templateUrl: './validated-form-model-driven-with-dir.component.html',
  styleUrls: ['./validated-form-model-driven-with-dir.component.scss']
})
export class ValidatedFormModelDrivenWithDirComponent implements OnInit {
  @Input() in!: Person;
  genders: KeyValuePair<string, string>[];

  form = this.fb.group({
    id: [0],
    name: ['', [CustomValidators.required, Validators.minLength(2), Validators.maxLength(24)]],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', CustomValidators.required],
    birth: ['', CustomValidators.required],
    rank: ['0', [CustomValidators.required, Validators.min(1), Validators.max(10)]],
    active: [true]
  });

  // form controls (used in template here)
  name = this.form.controls.name as FormControl;
  rank = this.form.controls.rank as FormControl;
  email = this.form.controls.email as FormControl;
  gender = this.form.controls.gender as FormControl;
  birth = this.form.controls.birth as FormControl;
  active = this.form.controls.active as FormControl;

/*  get fc() {
    return this.form.controls;
  }*/

  constructor(
    private fb: FormBuilder,
    private formValidatorService: FormValidatorService
  ) {
    this.genders = stringEnumToKeyValuePairArray(Gender, true);
  }

  ngOnInit(): void {
    this.form.patchValue(this.in);
  }

  onSubmit() {
    const p: Person = this.form.getRawValue();
    console.log('SUBMIT:', p);
  }

  getFormControlErrorMessage(ctr: AbstractControl): string {
    return this.formValidatorService.getFormControlErrorMessage(ctr);
  }
}
