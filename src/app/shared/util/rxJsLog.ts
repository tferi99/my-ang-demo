import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {NGXLogger} from 'ngx-logger';

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
export const rxJsLog = (log: NGXLogger, level: RxJsLoggingLevel, message: string) =>
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

          switch (level) {
           case RxJsLoggingLevel.TRACE:
             log.trace(levelName + ' - ' + message + ': ', val);
             break;
           case RxJsLoggingLevel.DEBUG:
             log.debug(levelName + ' - ' + message + ': ', val);
             break;
           case RxJsLoggingLevel.INFO:
             log.info(levelName + ' - ' + message + ': ', val);
             break;
           case RxJsLoggingLevel.ERROR:
             log.error(levelName + ' - ' + message + ': ', val);
             break;
         }
        }
      })
    );
