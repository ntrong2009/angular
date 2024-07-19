import { Component } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup } from "@angular/forms";

@Component({
    selector: 'app-ng-async-validator',
    templateUrl: './ng-async-validator.component.html',
    styleUrls: ['./ng-async-validator.component.scss']
})
export class NgAsyncValidator {
    parentFrom: UntypedFormGroup = new UntypedFormGroup({
        userName: new UntypedFormControl(null)
    });
}