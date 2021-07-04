import { MatInputComponent } from './mat-input.component';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        MatInputComponent
    ],
    imports: [
        MatInputModule
    ],
    exports: [
        MatInputComponent
    ]
})
export class MatInputModuleLocal { }
