import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EnterAndLeaveComponent } from './components/enter-and-leave/enter-and-leave.component';
import { AnimateChildComponent } from './components/animate-child/animate-child.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterAndLeaveComponent,
    AnimateChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
