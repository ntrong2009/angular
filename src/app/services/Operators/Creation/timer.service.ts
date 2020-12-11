import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TimerService {

    // timer(initialDelay: number | Date, period: number, scheduler: Scheduler): Observable
    source2 = timer (7000, 1000); // emit value after 7 second, then every 1 second

    constructor() {}

    // truyền vào 1 giá trị và tăng dần theo thời gian mỗi lần 5s
    timerEmits_1_valueThenCompletes() {
        // emit 0 after 5 second then complete, since no second argument is supplied
        const source = timer(5000);
        const subscribe = source.subscribe(val => {
            console.log(val);
        });
    }

    // sau 5s emit một value và sau đó mỗi 1s emit tiếp những value khác
    timerEmitsAfter_5_SecondThenEvery_2_Seconds() {
        const source = timer(5000, 1000);
        const subscribe = source.subscribe(val => {
            console.log(val);
        });
    }
}
