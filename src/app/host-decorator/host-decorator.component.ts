import { Component, Directive, Host, OnInit, Optional } from '@angular/core';

class OtherService {}
class HostService {}

// tslint:disable-next-line:directive-selector
@Directive({selector: 'child-directive'})
class ChildDirective {
  logs: string[] = [];

  constructor(@Optional() @Host() os: OtherService, @Optional() @Host() hs: HostService) {
    this.logs.push(`os is null: ${os === null}`);
    this.logs.push(`hs is an instance of HostService: ${hs instanceof HostService}`);
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'parent-cmp',
  viewProviders: [HostService],
  template: '<child-directive></child-directive>',
})
// tslint:disable-next-line:component-class-suffix
class ParentCmp {}

@Component({
  selector: 'app-host-decorator',
  viewProviders: [OtherService],
  template: '<parent-cmp></parent-cmp>'
  // templateUrl: './host-decorator.component.html',
  // styleUrls: ['./host-decorator.component.css']
})
export class HostDecoratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
