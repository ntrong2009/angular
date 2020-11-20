import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdBannerComponent } from './ad-banner.component';
import { AdDirective } from './ad.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdBannerComponent,
    AdDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
