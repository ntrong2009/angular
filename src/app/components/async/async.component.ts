import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  promise: Promise<string>;
  observableData: number;
  subscription: object;

  constructor() { }

  ngOnInit(): void {
    this.promise = this.getPromise();
  }

  getPromise(): Promise<string>{
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('promise complete'), 3000);
    });
  }

  getObserver(){
    return Observable
  }
}
