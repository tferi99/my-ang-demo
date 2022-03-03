import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'rtr-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  gotoA() {
    console.log('GOTO A - ' , this.route.toString());
    this.router.navigate(['a'], {relativeTo: this.route});
  }
  gotoB() {
    console.log('GOTO B - ' , this.route.toString());
    this.router.navigate(['b'], {relativeTo: this.route});
  }

  gotoX() {
    console.log('GOTO X - ' , this.route.toString());
    this.router.navigate(['valami'], {relativeTo: this.route});
  }
}
