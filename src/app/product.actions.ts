import { createAction, props } from '@ngrx/store';

import { ProductModel } from 'src/app/product.model';

export const load_product = createAction('load_product', props<{ payload: Object }>() );
console.log('load_product',typeof load_product);
export const load_product_success = createAction('load_product_success', props<{ payload: ProductModel }>())