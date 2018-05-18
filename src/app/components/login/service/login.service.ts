import { Injectable } from '@angular/core';
import { LoginDTO } from '../../../model/login.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  private baseUrl = 'http://localhost:8020/login'

  constructor(private http: HttpClient) { }

  doLogin(login: LoginDTO): Observable<any>{
    return this.http.post<any>(this.baseUrl,  login);
  }
}
