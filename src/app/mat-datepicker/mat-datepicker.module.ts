import { MatDatepickerComponent } from './mat-datepicker.component';
import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
    declarations: [
        MatDatepickerComponent
    ],
    imports: [
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule
    ],
    exports: [
        MatDatepickerComponent
    ]
})
export class MatDatePickerModule { }
