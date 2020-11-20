import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({providedIn: 'root'})
export class Timer {

    // timer(initialDelay: number | Date, period: number, scheduler: Scheduler): Observable
    source2 = timer (7000, 1000); // emit value after 7 second, then every 1 second

    constructor() {}

    timerEmits_1_valueThenCompletes() {
        // emit 0 after 5 second then complete, since no second argument is supplied
        const source = timer(5000);
        const subscribe = source.subscribe(val => {
            console.log(val);
        });
    }

    timerEmitsAfter_5_SecondThenEvery_2_Seconds() {
        const source = timer(5000, 1000);
        const subscribe = source.subscribe(val => {
            console.log(val);
        });
    }
}
