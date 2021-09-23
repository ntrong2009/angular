import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DynamicContentOneComponent } from '../dynamic-content-one/dynamic-content-one.component';
import { DynamicContentTwoComponent } from '../dynamic-content-two/dynamic-content-two.component';

@Component({
  selector: 'app-example-container',
  templateUrl: './example-container.component.html',
  styleUrls: ['./example-container.component.css']
})
export class ExampleContainerComponent implements OnInit {

  @ViewChild('dynamicComponent', { read: ViewContainerRef, static: true }) containerRef: ViewContainerRef;

  constructor(
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  }

  addDynamicCompOne() {
    const componentFactory = this.cfr.resolveComponentFactory(DynamicContentOneComponent);
    const componentRef = this.containerRef.createComponent(componentFactory);
  }

  addDynamicCompTwo() {
    const componentFactory = this.cfr.resolveComponentFactory(DynamicContentTwoComponent);
    const componentRef = this.containerRef.createComponent(componentFactory);
    componentRef.instance.data = 'input from parent component';
  }

  clearDynamicComp() {
    this.containerRef.clear();
  }

}
