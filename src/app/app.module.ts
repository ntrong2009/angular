import { ChildAModule } from './child-a/child-a.module';
import { ChildBModule } from './child-b/child-b.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChildBModule,
    ChildAModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
