import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-enter-and-leave',
  templateUrl: './enter-and-leave.component.html',
  styleUrls: ['./enter-and-leave.component.css'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s', style({opacity: 1}))
      ]),

      transition(':leave',
        animate('1s', style({opacity: 0}))
      )
    ]),

    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),

      transition(':increment', [
        query(':enter', [
          style({opacity: 0, width: '0px'}),
          stagger(50, [
            animate('300ms ease-out', style({opacity: 1, width: '*'}))
          ])
        ], { optional: true })
      ]),

      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({opacity: 0, width: 0}))
          ])
        ])
      ]),

    ])
  ]
})
export class EnterAndLeaveComponent implements OnInit {

  showDiv = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDiv(){
    this.showDiv = !this.showDiv;
  }

}
