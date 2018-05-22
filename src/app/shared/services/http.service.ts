import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//TODO Ver porque não funfa
@Injectable()
export class HttpService {
  private baseUrl = 'http://localhost:8020/'

  constructor(public http: HttpClient) { }

  public find<T>(url: string): Observable<T>{
    return this.http.get<T>(this.baseUrl + url);
  }

  public post<T>(url: string, body: object): Observable<T>{
    return this.http.post<T>(this.baseUrl + url, body);
  }

  public put<T>(url: string, body: object): Observable<T>{
    return this.http.put<T>(this.baseUrl + url, body);
  }

  public delete<T>(url: string, id: String): Observable<T>{
    return this.http.delete<T>(this.baseUrl + url + `/${id}`);
  }

  public testar() {
    console.log('funcionando');
  }
}
