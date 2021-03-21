import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AlertContentComponent } from '../alert-content/alert-content.component';

@Component({
  selector: 'app-alert-container',
  templateUrl: './alert-container.component.html',
  styleUrls: ['./alert-container.component.css']
})
export class AlertContainerComponent implements OnInit, AfterViewInit {

  @ViewChild('container', { read: ViewContainerRef, static: false }) container: ViewContainerRef;

  componentRef: ComponentRef<AlertContentComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  renderComponent() {
    const container = this.container;
    container.clear();
    const injector = container.injector;

    const cfr: ComponentFactoryResolver = injector.get(ComponentFactoryResolver);

    const componentFactory = cfr.resolveComponentFactory(AlertContentComponent);

    const componentRef = container.createComponent(componentFactory, 0, injector);
    componentRef.instance.data = 'message from container';
    this.componentRef = componentRef;
  }

}
