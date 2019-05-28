import {Component, OnInit, Input} from '@angular/core';
import {Gender, Person} from '../../shared/model/person.model';

@Component({
  selector: 'lc-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  @Input()
  person: Person;

  constructor() {
    this.person = {
      name: 'John Smith',
      born: 100,
      gender: Gender.MALE
    };
  }

  ngOnInit() {
  }

}
