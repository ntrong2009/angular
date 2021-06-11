import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HostDecoratorComponent } from './host-decorator/host-decorator.component';

@NgModule({
  declarations: [
    AppComponent,
    HostDecoratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
