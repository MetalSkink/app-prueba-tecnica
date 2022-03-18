import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UsersPanelComponent } from './users-panel/users-panel.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    UsersPanelComponent,
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
