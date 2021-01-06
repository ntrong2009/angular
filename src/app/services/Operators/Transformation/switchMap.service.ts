import { Injectable } from '@angular/core';
import { empty, fromEvent, interval, merge } from 'rxjs';
import { mapTo, scan, startWith, switchMap, takeWhile } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class SwitchMapService {
    /* switch map operator will be cancel previous observer and create a new observer
    (switch to a new observer) */

    restartIntervalOnEveryClick() {
        fromEvent(document, 'click').pipe(
            switchMap(() => interval(1000))
        ).subscribe(console.log);
    }

    countDownTimerWithPauseAndResume() {
        const COUNTDOWN_SECONDS = 10;

        const remainingLabel = document.getElementById('remaining');
        const pauseButton = document.getElementById('pause');
        const resumeButton = document.getElementById('resume');

        const interval$ = interval(1000).pipe(mapTo(-1));
        const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));
        const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true));

        const timer$ = merge(pause$, resume$)
        .pipe(
            startWith(true),
            switchMap(val => (val ? interval$ : empty())),
            scan((acc, curr) => (curr ? curr + acc : acc), COUNTDOWN_SECONDS),
            takeWhile(v => v >= 0)
        ).subscribe((val: any) => (remainingLabel.innerHTML = val));
    }
}
