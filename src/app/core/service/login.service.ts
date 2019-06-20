import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../shared/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>('/api/login', {email, password});
    }

  logout(email: string): Observable<string> {
    return this.http.post<string>('/api/login', {email});
  }
}
