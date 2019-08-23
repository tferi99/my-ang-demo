import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class I18n2Module { }
