import { ChildARoutingModule } from './child-a-routing.module';
import { ChildAComponent } from './child-a.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        ChildAComponent
    ],
    imports: [
        ChildARoutingModule
    ],
})
export class ChildAModule { }
