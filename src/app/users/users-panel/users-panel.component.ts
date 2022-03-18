import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/response.interface';

@Component({
  selector: 'app-users-panel',
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.css']
})
export class UsersPanelComponent implements OnInit {

  constructor(private userService:UserService) { }

  pagina:number = 1;
  mostrados:number = 5;

  users: User[] = [];

  ngOnInit(): void {
    this.userService.getUsuarios()
      .subscribe(resp => {
        this.users=resp.data;
      })
  }

  buscar(){
    console.log(this.pagina);
    console.log(this.mostrados);
    this.userService.getUsuariosPorParametro(this.pagina,this.mostrados)
      .subscribe(resp => {
        console.log(resp.data);
        this.users=resp.data;
      })

  }
}
