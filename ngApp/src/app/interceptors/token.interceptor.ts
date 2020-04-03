import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService, private _router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let tokenizedReq = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this._authService.getToken()
      }
    })
    return next.handle(tokenizedReq)
      // .pipe(map((res) => {
      //   if (res instanceof HttpResponse) {
      //     console.log('asdfsdsdff')
      //     if (res.status === 401) {
      //       console.log('UNAUTHROIZED')
      //       this._router.navigate(['/login'])
      //       return res;
      //     }
      //     return res;
      //   }
      // }))
  }

}
