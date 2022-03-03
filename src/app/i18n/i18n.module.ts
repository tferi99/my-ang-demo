import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import localeHu from '@angular/common/locales/hu';
import localeHuExtra from '@angular/common/locales/extra/hu';
import {registerLocaleData} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

registerLocaleData(localeHu, 'hu', localeHuExtra);

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class I18nModule { }
