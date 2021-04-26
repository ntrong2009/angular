import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { mapTo, tap, share } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ShareService {
    constructor(){}

    share() {
        const source = timer(5000);
        const example = source.pipe(
            tap(() => console.log('***SIDE EFFECT***')),
            mapTo('***RESULT***'),
            share() // chia sẻ dữ liệu cho những nơi đăng ký
        );

        const subscribeThree = example.subscribe(val => {
            console.log('%c%s', 'color: #e50000', 'subscribeThree', val);
        });
        const subscribeFour = example.subscribe(val => {
            console.log('%c%s', 'color: #733d00', 'subscribeFour', val);
        });
    }
}
