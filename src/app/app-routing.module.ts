import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObserverComponent } from './component/observer/observer.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const route: Routes = [
    {
        path: 'observer',
        component: ObserverComponent
    },
    {
        path: 'page-not-found',
        component: PageNotFoundComponent
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
