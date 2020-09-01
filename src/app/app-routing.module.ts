import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppResolver } from './app.resolver';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        resolve: {
            data: AppResolver
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
