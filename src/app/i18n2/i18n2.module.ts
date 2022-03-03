import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule
  ]
})
export class I18n2Module { }
