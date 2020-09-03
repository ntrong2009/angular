import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  loader = false;

  constructor(
    private actRoute: ActivatedRoute,
    private appService: AppService
  ){
    this.actRoute.data.subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
      this.appService.getResult().subscribe(data => {
        setTimeout(() => {
          console.log('data result', data);
          this.loader = true;
        }, 3000);
      });
  }

}
