import { ChildBComponent } from './child-b.component';
import { ChildBRoutingModule } from './child-b-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        ChildBComponent
    ],
    imports: [
        ChildBRoutingModule
    ],
})
export class ChildBModule { }
