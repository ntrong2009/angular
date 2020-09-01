import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute){
    this.actRoute.data.subscribe(data => {
      console.log(data);
    });
  }

  loader = false;

  ngOnInit() {
    setInterval(() => {
      this.loader = true;
    }, 3000);
  }

}
