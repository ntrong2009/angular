import { AuthGuardService } from './auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const router: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(router)
    ],
    providers: [
        AuthGuardService
    ]
})

export class AppRoutingModule {
    constructor() {
        console.log('%c%s', 'color: #731d1d', 'dsadasdsa');
    }
}
