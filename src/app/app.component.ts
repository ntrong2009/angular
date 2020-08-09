import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  arrays = ['a','b','c','d','e'];

  addMoreItem(){
    this.arrays.push('f');
  }

  deleteItem(){
    this.arrays.pop();
  }
}
