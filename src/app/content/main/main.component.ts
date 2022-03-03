import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'con-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  who = 'World';

  constructor() {}

  ngOnInit(): void {}
}
