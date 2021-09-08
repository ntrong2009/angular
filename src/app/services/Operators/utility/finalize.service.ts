import { interval } from 'rxjs';
import { Injectable } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class FinalizeService {

    // Call a function when observable completes or errors


    emitWhenObserverComplete() {
        const source = interval(1000);
        source.pipe(
            take(5),
            finalize(() => {
                alert('Sequence complete');
            })
        ).subscribe(val => {
            console.log('%c%s', 'color: #7f7700', 'val', val);
        });
    }
}
