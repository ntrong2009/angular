import { Injectable } from '@angular/core';
import { from, interval } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class FilterService {
    // filter(select: Function, thisArg: any): Observable
    constructor() {}

    filterForEventNumber() {
        const source = from([1, 2, 3, 4, 5]);
        const example = source.pipe(filter(num => num % 2 === 0));
        const subscribe = example.subscribe(val => {
            console.log(`Event number: ${val}`);
        });
    }

    filterObjectBasedOnProperty() {
        const source = from([
            { name: 'Joe', age: 31 },
            { name: 'Bob', age: 25 }
        ]);
        const example = source.pipe(filter(person => person.age >= 30));
        const subscribe = example.subscribe(val => console.log(val));
    }

    filterForNumberGreaterThanSpecifiedValue() {
        const source = interval(1000);
        const example = source.pipe(filter(num => num > 5));
        const subscribe = example.subscribe(val => {
            console.log(val);
        });
    }
}
