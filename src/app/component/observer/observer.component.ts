import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';
import { take, takeUntil, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent implements OnInit, OnDestroy {

  subscription$ = new Subscription();

  notifi$ = new Subject();

  constructor() { }

  ngOnInit(): void {
    const Observer1$ = interval(1000);
    const Observer2$ = interval(1000);
    const subscription1$ = Observer1$.pipe(take(1)).subscribe(val => {
      // console.log(val);
    });
    const subscription2$ = Observer2$.subscribe(val => {
      // console.log(val);
    });
    this.subscription$.add(subscription1$);
    this.subscription$.add(subscription2$);



    const Observer3$ = interval(1000);
    Observer3$.pipe(
      takeUntil(this.notifi$)
    ).subscribe(val => {
      // console.log(val);
    });



    const Observer4$ = interval(1000);
    Observer4$.pipe(
      takeWhile(value => value < 10)
    ).subscribe(val => {
      console.log(val);
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
    this.notifi$.next();
    this.notifi$.complete();
  }

}
