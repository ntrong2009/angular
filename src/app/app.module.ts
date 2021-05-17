import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { Action, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffect } from 'src/app/product.effect';
import * as ProductReducer from 'src/app/product.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      productReducer: ProductReducer.reducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: true,
      actionSanitizer: (val): Action => {
        // console.log('%c%s', 'color: #00a3cc', 'val', val);
        return val;
      }
    }),
    EffectsModule.forRoot([CounterEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
