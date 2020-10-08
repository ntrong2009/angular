import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppInitService } from './app-init.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
      private appInit: AppInitService,
  ) {}

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${this.appInit.getConfig('token')}`
        }
    });

    return next.handle(request).pipe(
        catchError(err => {
           return throwError(err);
        }),
        map(data => {
            console.log(data);
            return data;
        })
    );
  }
}
