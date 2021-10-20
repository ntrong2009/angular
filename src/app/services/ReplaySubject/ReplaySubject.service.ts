import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ReplaySubjectDemo {
    subject = new ReplaySubject(2);


    constructor() { }

    run() {

        this.subject.next(1);
        this.subject.next(2);
        this.subject.next(3);

        this.subject.subscribe((data) => {
            console.log('Subscriber data:', data);
        });

        this.subject.next(4);

        console.log(this.subject);
    }
}
