import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export enum RxJsLoggingLevel {
  TRACE,
  DEBUG,
  INFO,
  ERROR
}

let rxjsLoggingLevel = RxJsLoggingLevel.INFO;

export function setRxJsLoggingLevel(level: RxJsLoggingLevel) {
  rxjsLoggingLevel = level;
}

/**
 * This is a custom logger operator which can be used to trace data flow
 * of piped operator chain.
 *
 * Put this operator into pipe(...) chain where you want to tap data flow.
 *
 * @param level
 * @param message
 */
export const log = (level: RxJsLoggingLevel, message: string) =>
  (source: Observable<any>) => source.pipe(
      tap(val => {
       if (level >= rxjsLoggingLevel) {
          let levelName = '';
          switch (level) {
            case RxJsLoggingLevel.TRACE:
              levelName = '[TRACE]';
              break;
            case RxJsLoggingLevel.DEBUG:
              levelName = '[DEBUG]';
              break;
            case RxJsLoggingLevel.INFO:
              levelName = '[INFO ]';
              break;
            case RxJsLoggingLevel.ERROR:
              levelName = '[ERROR]';
              break;
          }
          console.log(levelName + ' - ' + message + ': ', val);
        }
      })
    );
