import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = { counter: 0 };

  increment() {
    this.data = { counter: ++this.data.counter };
  }
}
