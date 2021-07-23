import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  value$ = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient
  ) {
    this.http.get('http://localhost:1997/data').subscribe((data: any) => {
      this.value$.next(data.res);
    }, error => {
      this.value$.error(error);
    });
  }
}
