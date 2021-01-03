import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

interface Courses {
  description: string;
  coursesListIcon: string;
  iconUrl: string;
  longDescription: string;
  url: string;
}


const param = new HttpParams()
  .set('orderBy', '$key')
  .set('limitToFirst', '1');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  courses$: Observable<Courses[]>;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('http://localhost:3000/data', {params: param})
      .pipe(map(data => {
        console.log('%c%s', 'color: #ff0000', 'data before map', data);
        return _.values(data);
      })).subscribe(data => {
        console.log('%c%s', 'color: #00e600', 'data after map', data);
      });
  }
}
