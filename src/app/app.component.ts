import { Component } from '@angular/core';
import { Observable, of, empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  rx = new Observable<any>();
  empty = empty();
  arr = of([1,2,3,4]);

  constructor(){
    this.arr.subscribe(data => {
      console.log(data);
    })

    this.empty.subscribe(data => {
      console.log('data empty', data);
    })
  }
}
