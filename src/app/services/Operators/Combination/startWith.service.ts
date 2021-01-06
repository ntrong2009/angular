import { Injectable } from '@angular/core';
import { of, timer } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class StartWithService {
    // create firt value and emit to observer

    startWithOnNumberSequence() {
        const source = of([1, 2, 3]);
        const example = source.pipe(startWith(0));
        const subscribe = example.subscribe(console.log);
    }

    startWithMultipleValues() {
        const source = timer(5000);
        const example = source.pipe(startWith(-3, -2, -1));
        const subscribe = example.subscribe(console.log);
    }
}
