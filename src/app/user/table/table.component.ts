import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { User } from 'src/app/models/user.model';
import { ServiceDataService } from 'src/app/service/service-data.service';
import { DialogSubmitComponent } from '../dialog-submit/dialog-submit.component';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  userList: User[] = [];
  displayedColumns = ['id', 'name', 'email', 'gender', 'status'];
  
  pageSlice = this.userList.slice(0, 6);
  constructor(private userService: ServiceDataService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

   getAllUsers(): void {
    this.userService.getUsers().subscribe((data: any) => {
      this.userList = data.data;
      console.log(data);
    });
  }
  openDialogDetails(user: User) {
    this.dialog.open(DialogUserComponent, {
      width: "400px",
      height: "350px",
      data: {
        id: user.id, name: user.name, email: user.email,
        gender: user.gender, status: user.status
      }
    })

  }


}
