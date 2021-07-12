import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  gotoC(param?: string) {
    console.log('GOTO C - param:' + param, this.route.toString());
    if (param) {
      this.router.navigate(['c'], {relativeTo: this.route, queryParams: {cica: param}});
    } else {
      this.router.navigate(['c'], {relativeTo: this.route});
    }
  }

  gotoD() {
    console.log('GOTO D - ' , this.route.toString());
    this.router.navigate(['d'], {relativeTo: this.route});
  }

  gotoX() {
    console.log('GOTO X - ' , this.route.toString());
    this.router.navigate(['valami'], {relativeTo: this.route});
  }
}
