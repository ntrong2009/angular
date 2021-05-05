import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  showBox = false;
  @Output() outputEvent = new EventEmitter();

  constructor(
    private http: HttpClient,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  focusInput() {
    this.showBox = false;
  }

  blurInput() {
    this.http.get('http://localhost:5000/data').subscribe(data => {
      console.log('%c%s', 'color: #ffa640', 'data', data);
      this.emitEvent();
    });
  }

  emitEvent() {
    this.showBox = true;
    this.cd.detectChanges();
    // this.outputEvent.next('emit value');
  }

}
