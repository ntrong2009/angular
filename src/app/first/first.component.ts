import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log('%c%s', 'color: #0088cc', 'params', params);
    });
  }

  gotoSecondComponent() {
    this.router.navigate(['second-component'], { relativeTo: this.route });
  }

}
