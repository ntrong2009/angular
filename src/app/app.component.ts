import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('triggerName', [
      transition('* => *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [style({ left: '-100%', opacity: 0 })], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [animate('1s ease-out', style({ left: '100%', opacity: 0 }))], { optional: true }),
          query(':enter', [animate('1s ease-out', style({ left: '0%', opacity: 1 }))], { optional: true })
        ]),
        query(':enter', animateChild(), { optional: true })
      ])
    ])
  ]
})
export class AppComponent {
  title = 'angular';

  prepareRoute(outlet: RouterOutlet){
    console.log('%c outlet data', 'color: red', outlet.activatedRouteData.state);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.state;
  }
}
