import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
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
    EffectsModule.forRoot([CounterEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
