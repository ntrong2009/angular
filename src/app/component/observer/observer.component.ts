import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css']
})
export class ObserverComponent implements OnInit {

  subscription$: Subscription;

  constructor() { }

  ngOnInit(): void {
    const Observer$ = interval(1000);
    this.subscription$ = Observer$.subscribe(val => {
      console.log(val);
    });
  }

}
