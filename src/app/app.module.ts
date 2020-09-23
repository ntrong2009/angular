import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListSidebarComponent } from './product-list-sidebar/product-list-sidebar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AComponentComponent } from './acomponent/acomponent.component';
import { BComponentComponent } from './bcomponent/bcomponent.component';
import { CComponentComponent } from './ccomponent/ccomponent.component';
import { DComponentComponent } from './dcomponent/dcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductListSidebarComponent,
    SideBarComponent,
    AComponentComponent,
    BComponentComponent,
    CComponentComponent,
    DComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
