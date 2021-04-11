import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { HttpClient } from '@angular/common/http';
import { filter, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit, OnDestroy {

  user: string;
  editUser: string;
  destroy$ = new Subject();

  constructor(
    private userService: UsersService,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.cast.subscribe(user => this.user = user);
    this.http.get('http://localhost:3000/translate-local').subscribe(data => {
      console.log('%c%s', 'color: #0ddb52', 'call data');
      this.userService.duplicateWhenNotUnsubscribe$.next(data);
    });

    this.userService.duplicateWhenNotUnsubscribe$.pipe(
      filter(loaded => !!loaded),
      // takeUntil(this.destroy$)
    ).subscribe(data => {
      console.log('%c%s', 'color: #0088cc', 'one component', data);
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  editTheUser(){
    this.userService.editUser(this.editUser);
  }

  navigate() {
    this.router.navigate(['two-component']);
  }

}
