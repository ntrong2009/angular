import { createReducer, on, Action } from '@ngrx/store';
import {
    load_product,
    load_product_success
} from 'src/app/product.actions';
import { ProductModel } from 'src/app/product.model';
import { from } from 'rxjs';

export interface State{
    product: ProductModel;
}

const productReducer = createReducer(
    {},
    on(load_product, (state) => ({ ...state, product: undefined })),
    on(load_product_success, (state, {payload}) => ({ ...state, product: payload }))
);

export function reducer(state: State, action: Action){
    return productReducer(state, action);
}
