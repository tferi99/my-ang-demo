import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  username: string = null;

  constructor() { }

  ngOnInit() {
  }

  usernameChanged(event: Event) {
    console.log('Event:', event);
    // @ts-ignore
    this.username = event.target.value;
  }

  usernameChangedNgModel(event: any) {
    console.log('Event:', event);
    this.username = event;
  }
}
