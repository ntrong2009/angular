import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { ProductModel } from 'src/app/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  product: ProductModel[];

  product$: Observable<any> = this.store.pipe(select(state => state.productReducer))

  constructor(
    private store: Store<{ productReducer: any }>,
  ){
    // console.log('store', this.store);
    this.store.dispatch({ type : 'load_product' });
    
    this.product$.subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit(){
  }
}
