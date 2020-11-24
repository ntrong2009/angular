
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SubjectService {

    simpleSubject() {
        const sub = new Subject();
        sub.next(1);
        sub.subscribe(x => console.log('subscribe A', x));
        sub.next(2);

        sub.subscribe(x => console.log('subscribe B', x));
        sub.next(3);

        const newSource = sub.asObservable();
        newSource.subscribe(x => console.log('subscribe new source', x));
    }
}
