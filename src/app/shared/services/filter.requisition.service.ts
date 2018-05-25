import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';

@Injectable()
export class FilterRequisitionService implements HttpInterceptor {

  constructor(private router: Router) { }

  // TODO ver essa porra
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url != 'http://localhost:8020/login') {

      const changedReq = req.clone(
        { headers: req.headers.set('authorization', localStorage.getItem('user')}
      );
      return next.handle(changedReq).do((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            window.alert('Unauthorized');
            localStorage.removeItem('user');
            this.router.navigate(['/login']);
          }
        }
      });
    }
    return next.handle(req);
  }
}
