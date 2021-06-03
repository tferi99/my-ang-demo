import {Injectable} from '@angular/core';

import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      // retry(3),                                          // retry on error
      catchError((error: HttpErrorResponse) => {
        // console.log('error caught by interceptor:', error );
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {                    // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {                                                    // server-side error
          switch (error.status) {
            case 403:
              errorMessage = 'Authentication error';
              break;
            case 403:
              errorMessage = 'Authorization error';
              break;
            case 504:
              errorMessage = 'Server is inaccessible';
              break;
            default:
              errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
        }
        this.toastr.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
/*
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('error')) {
      return next.handle(req);
    }
    console.warn('ErrorInterceptor');

    return next.handle(req).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        if (error.status !== 401) {
          // 401 handled in auth.interceptor
          this.toastr.error(error.message);
        }
        return throwError(error);
      })
    );
  }
}
*/
