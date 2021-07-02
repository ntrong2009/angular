import { ModelDrivenFormComponent } from './model-driven-form.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ModelDrivenFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        ModelDrivenFormComponent
    ]
})
export class ModelDrivenForm {}
