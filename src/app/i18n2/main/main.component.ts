import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  now = new Date();

  constructor(@Inject(LOCALE_ID) public locale: string, public translate: TranslateService) { }

  ngOnInit() {
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
