import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {LocalStorageService} from '../service/local-storage.service';
import {Observable, throwError} from 'rxjs';
import {NGXLogger} from 'ngx-logger';

/**
 * to put token into request page-header.
 */
/*
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private authService: AuthService;
  constructor(private injector: Injector) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authService = this.injector.get(AuthService);
    const token: string = this.authService.getToken();
    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return next.handle(request);
  }
}
*/

/**
 * To delete token from local storage on auth error.
 */
@Injectable()
export class TokenCleanInterceptor implements HttpInterceptor {
  constructor(private log: NGXLogger, private localStoreService: LocalStorageService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          this.log.warn('Auth error - token removed from Local Storage');
          this.localStoreService.deleteUser();
        }
        return throwError(error);
      })
    );
  }
}
