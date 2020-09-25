import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, of, Subscription } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit, OnDestroy {

  promise: Promise<string>;

  observableData: Observable<number>;
  // observableData: number;

  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.promise = this.getPromise();
    // this.subscription = this.getObserver().subscribe(value => this.observableData = value);
    this.observableData = this.getObserver();
  }

  getPromise(): Promise<string>{
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('promise complete'), 3000);
    });
  }

  getObserver(){
    return interval(1000).pipe(
      delay(3000),
      take(5),
      map(v => v),
    );
  }

  ngOnDestroy(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
