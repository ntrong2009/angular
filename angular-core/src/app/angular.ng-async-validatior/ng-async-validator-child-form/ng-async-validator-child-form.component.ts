import { Component } from "@angular/core";
import { AbstractControl, ControlValueAccessor, NG_ASYNC_VALIDATORS, NG_VALUE_ACCESSOR, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validator, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
    selector: 'app-ng-async-validator-child-form',
    templateUrl: './ng-async-validator-child-form.component.html',
    styleUrls: ['./ng-async-validator-child-form.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: NgAsyncValidatorChildForm,
            multi: true
        },
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: NgAsyncValidatorChildForm,
            multi: true
        }
    ]
})
export class NgAsyncValidatorChildForm implements ControlValueAccessor, Validator {

    childForm: UntypedFormGroup = new UntypedFormGroup({
        firstControl: new UntypedFormControl(null, [Validators.required])
    });

    get firstControl() {
        return this.childForm?.get('firstControl');
    }
    
    /*
    NG_ASYNC_VALIDATORS
    Sử dụng cho validator bất đồng bộ. Các validator này thực hiện một kiểm tra mất thời gian (qua một HTTP)
    và trả về kết quả dưới dạng Promise hoặc Obsrverable của ValidatorErrors hoặc null
    */
    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        return new Observable(observer => {
            setTimeout(() => {
                if (this.firstControl?.invalid) {
                    observer.next({ required: true })
                } else {
                    observer.next(null);
                }
                observer.complete();
            }, 5000);
        })
    }
    
    registerOnValidatorChange?(fn: () => void): void {
        console.log('%c%s', 'color: #733d00', 'registerOnValidatorChange');
    }
    
    writeValue(obj: any): void {
        console.log('%c%s', 'color: #733d00', 'writeValue');
    }
    
    registerOnChange(fn: any): void {
        console.log('%c%s', 'color: #733d00', 'registerOnChange');
    }
    
    registerOnTouched(fn: any): void {
        console.log('%c%s', 'color: #733d00', 'registerOnTouched');
    }
    
    setDisabledState?(isDisabled: boolean): void {
        console.log('%c%s', 'color: #733d00', 'setDisabledState');
    }

}