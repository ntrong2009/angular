import { createAction, props } from '@ngrx/store';

import { ProductModel } from 'src/app/product.model';

export const loadProduct = createAction('load_product', props<{ payload: object }>() );
export const loadProductSuccess = createAction('load_product_success', props<{ payload: ProductModel }>());

export const updateValueAffectToProduct = createAction('update_value_affect_to_product', props<{ payload: boolean }>());
