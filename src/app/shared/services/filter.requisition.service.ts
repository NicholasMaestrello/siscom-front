import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilterRequisitionService implements HttpInterceptor {

  constructor() { }

  // TODO ver essa porra
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (req.url != 'http://localhost:8020/login') {

        const changedReq = req.clone(
          { headers: req.headers.set('authorization', localStorage.getItem('user')}
        );
        return next.handle(changedReq);
      }
      return next.handle(req);
    }
    // return next.handle(req);
  }
}
