import { ModelDrivenForm } from './model-driven-form/model-driven-form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModelDrivenForm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
