import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  gotoC() {
    console.log('GOTO C - ' , this.currentRoute.toString());
    this.router.navigate(['c'], {relativeTo: this.currentRoute});
  }

  gotoD() {
    console.log('GOTO D - ' , this.currentRoute.toString());
    this.router.navigate(['d'], {relativeTo: this.currentRoute});
  }

  gotoX() {
    console.log('GOTO X - ' , this.currentRoute.toString());
    this.router.navigate(['valami'], {relativeTo: this.currentRoute});
  }
}
