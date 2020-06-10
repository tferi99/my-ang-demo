import {enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// use the require method provided by webpack
declare const require;
// we use the webpack handmade-loader to return the content as a string
const translationsHu = require(`raw-loader!./locale/messages.hu.xlf`);
const translationsDe = require(`raw-loader!./locale/messages.de.xlf`);

platformBrowserDynamic().bootstrapModule(AppModule, {
/*  providers: [
    {provide: TRANSLATIONS, useValue: translationsDe},
    {provide: TRANSLATIONS_FORMAT, useValue: 'xlf2'}
  ]*/
}).catch(err => console.error(err));

/*
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
 */
