import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ItcInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // const observer = new Observable();

        return new Observable(observer => {
            const subscription = next.handle(req).pipe().subscribe(
                event => {
                    // console.log('call success');
                    return observer.next(event);
                },
                // error => {
                //     console.log('error');
                //     observer.next(error);
                // }
            );

            return () => {
                subscription.unsubscribe();
            };
        });
    }
}
