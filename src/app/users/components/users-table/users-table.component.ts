import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
}
