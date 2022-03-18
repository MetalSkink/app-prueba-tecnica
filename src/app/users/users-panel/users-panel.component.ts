import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/response.interface';

@Component({
  selector: 'app-users-panel',
  templateUrl: './users-panel.component.html',
  styles: []
})
export class UsersPanelComponent implements OnInit {

  constructor(private userService:UserService) { }

  users: User[] = [];

  ngOnInit(): void {
    this.userService.getUsuarios()
      .subscribe(resp => {
        this.users=resp.data;
        console.log(this.users);
      })
  }

  buscar(){
    console.log('click');
  }
}
