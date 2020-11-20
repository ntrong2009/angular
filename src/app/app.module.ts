import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Timer } from './services/Creation/timer.service';
import { TakeUntile } from './services/Filtering/takeIntil.service';
import { Filter } from './services/Filtering/filter.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Timer,
    TakeUntile,
    Filter
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
