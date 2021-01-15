import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ObserverComponent } from './component/observer/observer.component';

const route: Routes = [
    {
        path: 'observer',
        component: ObserverComponent
    },
    {
        path: 'page-not-found',
        component: AppComponent
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(route),
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
