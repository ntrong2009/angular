import { MatCheckboxComponent } from './mat-checkbox.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        MatCheckboxComponent
    ],
    imports: [
        MatCheckboxModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        MatCheckboxComponent
    ]
})
export class MatCheckBoxModuleLocal { }
