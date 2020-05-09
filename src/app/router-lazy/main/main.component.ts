import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'rtr-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  gotoA() {
    console.log('GOTO A - ' , this.currentRoute.toString());
    this.router.navigate(['a'], {relativeTo: this.currentRoute});
  }
  gotoB() {
    console.log('GOTO B - ' , this.currentRoute.toString());
    this.router.navigate(['b'], {relativeTo: this.currentRoute});
  }

  gotoX() {
    console.log('GOTO X - ' , this.currentRoute.toString());
    this.router.navigate(['valami'], {relativeTo: this.currentRoute});
  }
}
