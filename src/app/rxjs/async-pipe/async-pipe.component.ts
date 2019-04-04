import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'rxj-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.sass']
})
export class AsyncPipeComponent implements OnInit {
  counter$ = interval(1000);

  constructor() { }

  ngOnInit() {
  }

}
