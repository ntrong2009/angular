import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  user: string;

  constructor( private userService: UsersService ) { }

  ngOnInit(): void {
    this.userService.cast.subscribe(user => this.user = user);
  }

}
