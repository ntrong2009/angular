import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { CounterService } from './product.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class CounterEffect{

    constructor(
        private action$: Actions,
        private counterService: CounterService,
    ){}

    loadProduct$ = createEffect(() => this.action$.pipe(
        ofType('load_product'),
        mergeMap(() => this.counterService.getData().pipe(
            map(product => ({type: 'load_product_success', payload: product})),
            catchError(()=> EMPTY)
        ))
    ));
}