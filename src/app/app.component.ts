import {Component, Inject, LOCALE_ID} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Angular Demo';

  languageList = [
    { code: 'en-US', label: 'English' },
    { code: 'de', label: 'Deutch' },
    { code: 'hu', label: 'Magyar' },
    { code: 'ru', label: 'Russzkij' },
  ];
  constructor(translate: TranslateService, @Inject(LOCALE_ID) protected localeId: string) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.addLangs(['en']);
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
}
