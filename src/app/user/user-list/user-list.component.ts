import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private userService: ServiceDataService,
              private dialog: MatDialog,
              private snackBar:MatSnackBar) {

  }
  ngOnInit(): void {
    this.getAllUsers();
  }


 
  openDialog(user:User) {
   this.dialog.open(DialogUserComponent,{
     width:"400px",
     height:"350px",
     //data:{id:student.id,name:student.name,email:student.email,
       //   gender:student.gender,status:student.status}
       data:user
   })
    
  }

  errorSnackBar(){
    this.snackBar.open("Something went wrong","Ok",{
      panelClass:['greskaSnackBar']
    });
    
  }

   getAllUsers(): void {
    this.userService.getUsers().subscribe((data: any) => {
      this.userList = data.data;
      console.log(data);
    }, error=>{
      this.userList=[];
      this.errorSnackBar()
    }
    );


  }

}
