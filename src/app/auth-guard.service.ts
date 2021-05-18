import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
    constructor() {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log('%c%s', 'color: #807160', 'ActivatedRouteSnapshot', route.queryParams);
        console.log('%c%s', 'color: #006dcc', 'RouterStateSnapshot', state);
        return true;
    }

    canActivateChild(): Observable<boolean> | Promise<boolean> | boolean {
        console.log('%c%s', 'color: #007300', 'go through canActivateChild');
        return true;
    }
}
