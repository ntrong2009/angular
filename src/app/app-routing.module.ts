import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppResolver } from './app.resolver';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
    {
        path: 'demo',
        component: DemoComponent,
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
