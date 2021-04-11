import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';

const routes: Routes = [
    {
        path: '',
        component: OneComponent
    },
    {
        path: 'one-component',
        component: OneComponent
    },
    {
        path: 'two-component',
        component: TwoComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
