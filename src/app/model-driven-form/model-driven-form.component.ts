import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  get userName() {
    return this.formData.controls.pwd.value;
  }

  isClickSubmnit = false;

  formData: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      userName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ])),
      pwd: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  onClickSubmit(data: FormGroup) {
    this.isClickSubmnit = true;
    console.log('%c%s', 'color: #fceef7', 'data', data);
    this.formData.markAllAsTouched();
  }
}
