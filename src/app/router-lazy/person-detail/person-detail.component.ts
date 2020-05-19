import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../shared/model/person.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PersonService} from '../../shared/service/person.service';

@Component({
  selector: 'rtr-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  person: Person;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = +params['id'];
          this.person = this.personService.get(id);
        }
      );
  }

  gotoEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
