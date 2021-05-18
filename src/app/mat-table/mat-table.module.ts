import { MatTableComponent } from './mat-table.component';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [
        MatTableComponent
    ],
    imports: [
        MatTableModule
    ],
    exports: [
        MatTableComponent
    ]
})
export class MatTableModuleSrc { }
