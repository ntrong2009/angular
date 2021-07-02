import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  userName;

  formData: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      userName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ])),
      pwd: new FormControl(null)
    });
  }

  onClickSubmit(data) {
    this.userName = data.userName;
    this.formData.markAllAsTouched();
  }
}
