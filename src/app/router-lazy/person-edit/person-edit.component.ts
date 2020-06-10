import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../shared/service/person.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../../shared/util/custom-validators';
import {KeyValuePair, stringEnumToKeyValuePairArray} from '../../shared/util/component-helper';
import {Gender} from '../../shared/model/person.model';

const MIN_WEIGTH = 1;
const MAX_WEIGTH = 150;

@Component({
  selector: 'rtr-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {
  id: number;
  form: FormGroup;
  genders: KeyValuePair<string, string>[];
  debugValidation = false;
  weightValidationMessageOptions = {min: MIN_WEIGTH, max: MAX_WEIGTH};

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router,
    fb: FormBuilder
  ) {
    this.genders = stringEnumToKeyValuePairArray(Gender, true);

    this.form = fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      birth: ['', Validators.required],
      weight: ['0', [Validators.required, Validators.min(MIN_WEIGTH), Validators.max(MAX_WEIGTH)]],
    })
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];            // + is to convert 'id' to number
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
    });
  }

  submit(): void {
    console.log('SUBMIT: ', this.form.value);
  }

  dumpForm() {
    console.log('FORM: ', {form: this.form.valid, controls: this.form.controls});
  }

  cancel() {

  }
}
