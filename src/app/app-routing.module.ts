import { ChildBComponent } from './child-b/child-b.component';
import { ChildAComponent } from './child-a/child-a.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'child-a',
    component: ChildAComponent
  },
  {
    path: 'child-b',
    component: ChildBComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
