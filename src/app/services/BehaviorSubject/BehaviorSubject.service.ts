import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BehaviorSubjectDemo {
    constructor() {
        const subject = new BehaviorSubject<number>(0);

        subject.next(Math.random());
        subject.next(Math.random());
    }
}
