import { StylePaginatorDirective } from './style-paginator.directive';
import { MatTableComponent } from './mat-table.component';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
    declarations: [
        MatTableComponent,
        StylePaginatorDirective
    ],
    imports: [
        MatTableModule,
        MatPaginatorModule,    ],
    exports: [
        MatTableComponent
    ]
})
export class MatTableModuleSrc { }
