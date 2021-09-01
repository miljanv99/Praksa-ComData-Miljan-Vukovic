import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { UserDataResponse } from 'src/app/models/user-data-response.model';
import { User } from 'src/app/models/user.model';
import { ServiceDataService } from 'src/app/service/service-data.service';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[] = [];
  isLoading = false;
  searchValue:string="";
  search$: Subject<string>= new Subject();//observable koja dobija vredost

  constructor(private userService: ServiceDataService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {
      this.searchSubscription();
  }
  ngOnInit(): void {
    this.getAllUsers();
  }

  openDialog(user: User) {
    this.dialog.open(DialogUserComponent, {
      width: "400px",
      data: user
    })
  }

  errorSnackBar() {
    this.snackBar.open("Something went wrong", "Ok", {
      panelClass: ['greskaSnackBar']
    });
  }

  getAllUsers(): void {
    this.isLoading = true;
    this.userService.getUsers(this.searchValue).subscribe((data: UserDataResponse) => {
      this.isLoading = false;
      this.userList = data.data;
    }, error => {
      this.userList = [];
      this.errorSnackBar();
    });
  }

  private searchSubscription(){
    this.search$.pipe(
      debounceTime(500)
    ).subscribe(//on ceka promenu inputa
      (value:string)=>{
        this.getAllUsers();
      }
      
    );

  }

}
