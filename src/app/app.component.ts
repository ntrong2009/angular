import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('http://localhost:3000/1').subscribe(data => {
      // console.log(data);
    });

    this.httpClient.get('http://localhost:3000/2').subscribe(data => {
      // console.log(data);
    });

    this.httpClient.get('http://localhost:3000/3').subscribe(data => {
      // console.log(data);
    });

    this.httpClient.get('http://localhost:3000/4').subscribe(data => {
      // console.log(data);
    });
  }
}
