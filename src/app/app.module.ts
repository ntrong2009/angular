import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsyncComponent } from './components/async/async.component';
import { BuiltInPipeComponent } from './components/built-in-pipe/built-in-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncComponent,
    BuiltInPipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
