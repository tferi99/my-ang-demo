import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  now = new Date();

  constructor(@Inject(LOCALE_ID) public locale: string) { }

  ngOnInit() {
  }

}
