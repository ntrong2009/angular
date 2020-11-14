import { animate, animateChild, keyframes, query, state, style, transition, trigger, group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animate-child',
  templateUrl: './animate-child.component.html',
  styleUrls: ['./animate-child.component.css'],
  animations: [
    trigger('parentAnimation', [
      // transition('0 => 1', [
      //   query('.h2-ne', [
      //     style({color: 'blue'}),
      //     animate(2000, style({color: 'green'}))
      //   ]),
      //   query('@childAnimation', [
      //     animateChild(),
      //   ])
      // ]),

      // transition('1 => 0', [
      //   query('.h2-ne', [
      //     style({color: 'green'}),
      //     animate(2000, style({color: 'blue'}))
      //   ]),
      //   query('@childAnimation', [
      //     animateChild()
      //   ])
      // ])
        state('0', style({color: 'blue'})),
        state('1', style({color: 'green'})),
        transition('0 => 1', [
          query('.h2-ne', [
            animate(5000)
          ]),
          query('@childAnimation', [
            animateChild(),
          ])
        ]),

        // transition('1 => 0', [
        //   group([
        //     state('1', style({color: 'blue'})),
        //     state('0', style({color: 'green'})),
        //     query('.h2-ne', [
        //       animate(5000)
        //     ]),
        //   ]),
        //   query('@childAnimation', [
        //     animateChild()
        //   ])
        // ])
    ]),

    trigger('childAnimation', [
      transition('0 <=> 1', [
        animate(`1000ms cubic-bezier(.17,.67,.27,1.26)`,
          keyframes([
            style({opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 0}),
            style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1})
          ])
        )
      ])
    ]),

    trigger('displayAnimation', [
      state('0', style({display: 'none'})),
      state('1', style({display: 'block'})),
      transition('* <=> *', animate('0.5s'))
    ])
  ]
})
export class AnimateChildComponent implements OnInit {

  exp = false;

  constructor() { }

  ngOnInit(): void {
  }

  expchange() {
    this.exp = !this.exp;
  }

  logdata(event) {
    console.log(event.element);
  }

}
