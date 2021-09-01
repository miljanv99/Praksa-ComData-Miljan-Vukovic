import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDataResponse } from 'src/app/models/user-data-response.model';
import { User } from 'src/app/models/user.model';
import { ServiceDataService } from 'src/app/service/service-data.service';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  userList: User[] = [];
  displayedColumns = ['id', 'name', 'email', 'gender', 'status'];
  
  constructor(private userService: ServiceDataService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getUsers("").subscribe((data: UserDataResponse) => {
      this.userList = data.data;
    });
  }
  openDialogDetails(user: User) {
    this.dialog.open(DialogUserComponent, {
      width: "400px",
      data: {
        id: user.id, name: user.name, email: user.email,
        gender: user.gender, status: user.status
      }
    })
  }

}
