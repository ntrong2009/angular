import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ItHelpdeskComponent } from './components/it-helpdesk/it-helpdesk.component';
import { IssueLogListComponent } from './components/issue-log-list/issue-log-list.component';
import { IssueLogDetailComponent } from './components/issue-log-detail/issue-log-detail.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ItHelpdeskComponent,
    IssueLogListComponent,
    IssueLogDetailComponent,
    BreadCrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
