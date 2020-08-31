import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { SideNavToggleComponent } from './side-nav-toggle/side-nav-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavToggleComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
