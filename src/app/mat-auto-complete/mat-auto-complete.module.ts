import { MatAutoCompleteComponent } from './mat-auto-complete.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
        MatAutoCompleteComponent
    ],
    imports: [
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatAutoCompleteComponent
    ]
})
export class MatAutoCompleteModule { }
