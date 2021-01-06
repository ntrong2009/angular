import { Component } from '@angular/core';
import { sampleProducts } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  public gridData: any[] = sampleProducts;

}
