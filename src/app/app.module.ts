import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerService } from './services/Operators/Creation/timer.service';
import { TakeUntileService } from './services/Operators/Filtering/takeIntil.service';
import { FilterService } from './services/Operators/Filtering/filter.service';
import { SubjectService } from './services/Subjects/Subject.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TimerService,
    TakeUntileService,
    FilterService,
    SubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
