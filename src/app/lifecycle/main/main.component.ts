import {Component, OnInit} from '@angular/core';
import {Gender, Person} from '../../shared/model/person.model';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'lc-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  sharedPerson: Person;         // shared with monitor (displed on monitor child component)
  nonSharedPerson: Person;      // not shared with monitor

  constructor(private spinner: NgxSpinnerService) {
    this.sharedPerson = {id: 10, name: 'John Smith', email: 'js@abc.com', gender: Gender.MALE, birth: new Date('1975-03-24'), active: true};
    this.nonSharedPerson = {id: 11, name: 'Jane Doe', email: 'js@abc.com', gender: Gender.FEMALE, birth: new Date('1981-11-22'), active: true};
  }

  ngOnInit() {
    console.log('>>>>>>>>>>>>>>>>>>>>>>> START ');
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      console.log('>>>>>>>>>>>>>>>>>>>>>>> END ');
    }, 1500);
  }

}
