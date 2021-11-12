import {Injectable} from '@angular/core';
import {User} from '../../shared/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public static USER_LOC_STORE_KEY = 'user';

  addUser(user: User): void {
    localStorage.setItem(LocalStorageService.USER_LOC_STORE_KEY, JSON.stringify(user));
  }

  deleteUser(): void {
    localStorage.removeItem(LocalStorageService.USER_LOC_STORE_KEY);
  }

  getUser(): User | undefined {
    const u = localStorage.getItem(LocalStorageService.USER_LOC_STORE_KEY);
    if (u) {
      let user: User;
      try {
        user = JSON.parse(u);
        return user;
      } catch (e) {
        this.deleteUser();
      }
    }
    return undefined;
  }
}


