import { MatFormFieldComponent } from './mat-form-field.component';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    declarations: [
        MatFormFieldComponent
    ],
    imports: [
        MatFormFieldModule
    ],
    exports: [
        MatFormFieldComponent
    ]
})
export class MatFormFieldModuleLocal {}
