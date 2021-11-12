import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dev-boolean-icon',
  templateUrl: './boolean-icon.component.html',
  styleUrls: ['./boolean-icon.component.css']
})
export class BooleanIconComponent implements OnInit {
  @Input() value!: boolean;

  constructor() {}

  ngOnInit() {
  }

}
