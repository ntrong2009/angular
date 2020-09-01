import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';
  loader = false;

  constructor(private actRoute: ActivatedRoute){
    this.actRoute.data.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
    setInterval(() => {
      this.loader = true;
    }, 3000);
  }
}
