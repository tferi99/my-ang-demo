import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ]
})
export class DatabindModule { }
