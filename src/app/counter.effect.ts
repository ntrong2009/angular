import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { CounterService } from './counter.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class CounterEffect{

    constructor(
        private action$: Actions,
        private counterService: CounterService,
    ){}

    loadCounter$ = createEffect(() => this.action$.pipe(
        ofType('cong'),
        mergeMap(() => this.counterService.getData().pipe(
            map(counter => ({type: 'cong', payload: counter}))
            //catchError(()=> EMPTY)
        ))
    ));
}