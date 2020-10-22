import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  value = 0;

  MaliciousData = 'Hello <script>alert("your application is hacked")</script>';

  changeValue() {
    this.value = Math.random();
  }
}
