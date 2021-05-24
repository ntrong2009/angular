import { MatGridComponent } from './mat-grid.component';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    declarations: [
        MatGridComponent
    ],
    imports: [
        MatGridListModule,
    ],
    exports: [
        MatGridComponent
    ]
})
export class MatGridModule { }
