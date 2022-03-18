import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/response.interface';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styles: [`
    table {
      width: 100%;
      margin-bottom:30px;
      margin-top:30px;
    }
    img {
      border-radius: 8px;
      margin: 5px;
    }
  `]
})
export class UsersTableComponent {

  constructor() { }


  displayedColumns: string[] = ['title', 'firstName', 'lastName','image'];

  @Input()
  users : User[] = [];

}
