import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  user: string;

  constructor(
    private userService: UsersService,
    private http: HttpClient,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.userService.cast.subscribe(user => this.user = user);
  }

  navigate() {
    this.router.navigate(['one-component']);
  }

}
