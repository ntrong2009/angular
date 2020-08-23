import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { ProductModel } from 'src/app/product.model';
import { CounterService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  product: ProductModel[];

  product$: Observable<any> = this.store.select(state => state)

  constructor(
    private store: Store<{ product: ProductModel[] }>,
  ){
    this.store.dispatch({ type : 'load_product' });
    
    this.product$.subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit(){
  }
}
