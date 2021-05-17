import { createReducer, on, Action } from '@ngrx/store';
import {
    loadProduct,
    loadProductSuccess,
    updateValueAffectToProduct
} from 'src/app/product.actions';
import { ProductModel } from 'src/app/product.model';

export interface State{
    product: ProductModel;
    valueAffectToProduct: boolean;
}

const productReducer = createReducer(
    {},
    on(loadProduct, (state) => ({ ...state, product: undefined })),
    on(loadProductSuccess, (state, {payload}) => ({ ...state, product: payload })),
    on(updateValueAffectToProduct, (state, {payload}) => {
        return {
            ...state,
            valueAffectToProduct: payload
        };
    })
);


export function reducer(state: State, action: Action){
    // console.log('%c%s', 'color: #00e600', 'Action', action);
    return productReducer(state, action);
}
