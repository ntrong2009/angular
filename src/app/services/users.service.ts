import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  duplicateWhenNotUnsubscribe$ = new BehaviorSubject<any>(null);

  private user = new BehaviorSubject<string>('john');
  cast = this.user.asObservable();

  constructor() { }

  editUser(newUser){
    this.user.next(newUser);
  }
}
