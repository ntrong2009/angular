import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/default',
    pathMatch: 'full'
  },
  {
    path: 'default',
    component: DefaultComponent
  },
  {
    path: 'dog',
    component: DogComponent,
  },
  {
    path: 'cat/:id',
    component: CatComponent
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
