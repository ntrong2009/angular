import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenForm } from './template-driven-form/template-driven-form.component';
import { NgAsyncValidator } from './ng-async-validatior/ng-async-validator.component';
import { NgAsyncValidatorChildForm } from './ng-async-validatior/ng-async-validator-child-form/ng-async-validator-child-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenForm,
    NgAsyncValidator,
    NgAsyncValidatorChildForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
