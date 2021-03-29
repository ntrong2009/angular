import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  parentString: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.parentString = 'dsadasdas';
  }

  parentFunc() {
    return 'parent Func';
  }
}
