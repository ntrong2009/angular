import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';


// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// tslint:disable-next-line:max-line-length
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'angular';

  constructor() {
    alert('constructor');
  }

  ngOnChanges() {
    alert('ngOnChanges');
  }

  ngOnInit() {
    alert('ngOnInit');
  }

  ngDoCheck() {
    alert('ngDoCheck');
  }

  ngAfterContentInit() {
    alert('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    alert('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    alert('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    alert('ngAfterViewChecked');
  }

  ngOnDestroy() {
    alert('ngOnDestroy');
  }
}
