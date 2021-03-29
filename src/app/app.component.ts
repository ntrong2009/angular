import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(ParentComponent) parent: ParentComponent;

  @ViewChild('parentMetadata', {read: ElementRef}) parentMetadata: ElementRef;

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('%c%s', 'color: #bf1d00', 'parent', this.parent);
    console.log('%c%s', 'color: #00bf00', 'parent', this.parentMetadata.nativeElement);
  }
}
