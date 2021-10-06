import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BehaviorSubjectDemo {
    subject = new BehaviorSubject<number>(0);


    constructor() { }

    run() {

        this.subject.next(1);
        this.subject.next(2);

        this.subject.subscribe((data) => {
            console.log('Subscriber data:', data);
        });

        this.subject.next(3);

        console.log(this.subject.value);
    }
}
