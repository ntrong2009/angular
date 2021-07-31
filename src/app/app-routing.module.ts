import { IssueLogListComponent } from './components/issue-log-list/issue-log-list.component';
import { ItHelpdeskComponent } from './components/it-helpdesk/it-helpdesk.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueLogDetailComponent } from './components/issue-log-detail/issue-log-detail.component';

// Define routing for all soure
const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
            breadcrumb: 'Dashboard'
        },
        children: [
            {
                path: 'it-helpdesk',
                component: ItHelpdeskComponent,
                data: {
                    breadcrumb: 'IT Helpdesk'
                },
                children: [
                    {
                        path: 'issue-log',
                        data: {
                            breadcrumb: 'Issues Log'
                        },
                        children: [
                            {
                                path: '',
                                component: IssueLogListComponent,
                            },
                            {
                                path: 'new',
                                component: IssueLogDetailComponent,
                                data: {
                                    breadcrumb: 'New'
                                },
                            },
                            {
                                path: ':id',
                                component: IssueLogDetailComponent,
                                data: {
                                    breadcrumb: ''
                                },
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
