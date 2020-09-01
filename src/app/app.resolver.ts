import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
    providedIn: 'root',
})

export class AppResolver implements Resolve<any>{

    constructor(private appService: AppService){}

    resolve(route: ActivatedRouteSnapshot): Observable<any>{
        console.log('vao resolve');
        return this.appService.getData();
    }
}
