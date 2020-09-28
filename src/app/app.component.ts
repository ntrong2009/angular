import { Component, OnInit } from '@angular/core';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public breakpointObserver: BreakpointObserver){}

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]){
        console.log('%cMatches XSmall viewport', 'color: blue');
      }
      if (state.breakpoints[Breakpoints.Small]) {
        console.log('%cMatches Small viewport', 'color: blue');
      }
      if (state.breakpoints[Breakpoints.Medium]) {
        console.log('%cMatches Medium  viewport', 'color: blue');
      }
      if (state.breakpoints[Breakpoints.Large]) {
        console.log('%cMatches Large viewport', 'color: blue');
      }
      if (state.breakpoints[Breakpoints.XLarge]) {
        console.log('%cMatches XLarge viewport', 'color: blue');
      }
    });


    this.breakpointObserver.observe(['(min-width: 900px)']).subscribe((state: BreakpointState) => {
      if (state.matches){
        console.log('%cViewport is 900px or over!', 'color: green');
      } else {
        console.log('%cViewport is smaller than 900px!', 'color: green');
      }
    });

    if (this.breakpointObserver.isMatched('(min-height: 900px)')) {
      console.log('%cThe 900px viewport matched!', 'color: red');
    }
  }
}
