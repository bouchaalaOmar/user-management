import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {User} from '../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void{
    this.userService.getAll().subscribe(data => {
      console.log('getAllUser(): ' + JSON.stringify(data));
      this.users = data;
    });
  }

}
