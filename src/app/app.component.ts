import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username;
  formData;
  constructor() {}

  ngOnInit() {
    this.formData = new FormGroup({
      username: new FormControl('ngoctrong'),
      pwd: new FormControl('123')
    });
  }

  onClickSubmit(data) {
    this.username = data.username;
  }
}
