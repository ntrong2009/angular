import { Injectable } from '@angular/core';
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TakeUntileService {

    // takeUntil(notifier: Observable): Observable
    constructor() {}

    // emit value until diffrent Observer emit value
    takeValuesUntilTimerEmits() {
        const source = interval(1000);
        const timer$ = timer(5000);
        const example = source.pipe(takeUntil(timer$));
        const subscribe = example.subscribe(val => console.log(val));
    }
}
