import { MatInputModuleLocal } from './mat-input/mat-input.module';
import { MatAutoCompleteModule } from './mat-auto-complete/mat-auto-complete.module';
import { MatGridModule } from './mat-grid/mat-grid.module';
import { MatTableModuleSrc } from './mat-table/mat-table.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';

import { MainNavModule } from './main-nav/main-nav.module';
import { MatFormFieldModuleLocal } from './mat-form-field/mat-from-field.module';
import { MatCheckBoxModuleLocal } from './mat-checkbox/mat-checkbox.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MainNavModule,
    MatTableModuleSrc,
    MatGridModule,
    MatAutoCompleteModule,
    MatFormFieldModuleLocal,
    MatCheckBoxModuleLocal,
    MatInputModuleLocal
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
