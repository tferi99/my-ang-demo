import { Component, OnInit } from '@angular/core';
import {Person} from '../../shared/model/person.model';
import {PersonService} from '../../shared/service/person.service';

@Component({
  selector: 'rtr-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  persons: Person[];
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.persons = this.personService.getAll();
  }
}
