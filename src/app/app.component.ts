import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular';

  @ViewChild('vc', {read : ViewContainerRef}) vc: ViewContainerRef;
  @ViewChild('tpl') tpl: TemplateRef<any>;

  ngAfterViewInit(): void {
    console.log(this.tpl.elementRef);
  }

  insertView(){
    const view = this.tpl.createEmbeddedView(null);
    this.vc.insert(view);
  }

  deleteView(){
    this.vc.detach(0);
  }
}
