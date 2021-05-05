import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular';

  outPutEmitEvent($event) {
    console.log('%c%s', 'color: #00b300', 'out put event', $event);
  }
}
