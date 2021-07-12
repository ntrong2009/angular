import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { distinctUntilChanged, map, filter } from 'rxjs/operators';

import * as ProductAction from './product.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  valueAffect = true;
  product: any;

  constructor(
    private store: Store<{ productReducer: any }>,
  ){
    // console.log('store', this.store);
    this.store.dispatch({ type : 'load_product' });

    this.store.pipe(
      select(state => state.productReducer),
      map(loaded => loaded.product),
      distinctUntilChanged()
    ).subscribe(product => {
      this.product = product;
      console.log('%c%s', 'color: #ff0000', 'productReducer', product);
    });

    this.store.pipe(
      select(state => state.productReducer),
      map(loaded => loaded.valueAffectToProduct),
      distinctUntilChanged()
    ).subscribe(value => {
      console.log('%c%s', 'color: #20b612', 'valueAffectToProduct', value);
    });

    this.store.pipe(
      select(state => state.productReducer),
      map(loaded => loaded.errorProduct),
      distinctUntilChanged()
    ).subscribe(errorProduct => {
      this.store.dispatch({ type : 'load_product' });
      console.log('%c%s', 'color: #8c0038', 'errorProduct', errorProduct);
    });
  }

  ngOnInit(){
  }

  // when one value in store update, remaining value will be subscribe old value to the place where it is register
  updateValueAffect(value) {
    this.store.dispatch(ProductAction.updateValueAffectToProduct({
      payload: value
    }));
  }
}
