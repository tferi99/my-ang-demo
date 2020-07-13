import { Observable, throwError, timer } from 'rxjs';
import { mergeMap, finalize } from 'rxjs/operators';

export const genericRetryStrategy = ({
    maxRetryAttempts = 3,
    retryInterval = 1000,
  }: {
    maxRetryAttempts?: number,
    retryInterval?: number
  } = {}) => (attempts: Observable<any>) => {
  return attempts.pipe(
    mergeMap((error, index) => {
      const retryAttempt = index + 1;
      // if maximum number of retries have been met, throw error
      if (retryAttempt >= maxRetryAttempts) {
        return throwError(error);
      }
      console.log(`Error found. Attempt ${retryAttempt}: retrying in ${retryInterval}ms - Error:`, error);

      return timer(retryInterval);
    }),
    finalize(() => console.log('We are done!'))
  );
};

