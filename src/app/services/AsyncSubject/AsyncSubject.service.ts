import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AsyncSubjectDemo {
    subject = new AsyncSubject();


    constructor() { }

    run() {

        this.subject.next(1);
        this.subject.next(2);
        this.subject.next(3);

        this.subject.subscribe((data) => {
            console.log('Subscriber data:', data);
        });

        this.subject.next(4);
        this.subject.complete();
    }
}
