import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {LocalStorageService} from '../service/local-storage.service';
import {NGXLogger} from 'ngx-logger';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private localStorageService: LocalStorageService, public router: Router, private log: NGXLogger) {}

  canActivate(): boolean {
    if (!this.localStorageService.getUser()) {
      this.log.debug('\'' + LocalStorageService.USER_LOC_STORE_KEY + '\' cannot cannot found in local storage -> login');
      this.router.navigateByUrl('/ngrx/login');
      return false;
    }
    return true;
  }
}
