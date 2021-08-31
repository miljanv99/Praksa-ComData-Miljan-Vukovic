import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user.model';
import { ServiceDataService } from 'src/app/service/service-data.service';
import { UserComponent } from '../user.component';

@Component({
  selector: 'app-dialog-submit',
  templateUrl: './dialog-submit.component.html',
  styleUrls: ['./dialog-submit.component.css']
})
export class DialogSubmitComponent implements OnInit {

  user: User;
  isEdit :boolean;
  constructor(private snackBar: MatSnackBar,
    private service: ServiceDataService,
    private dialogRef: MatDialogRef<UserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {
    this.isEdit = data ? true : false;
    this.user = data ? Object.assign({}, data) : new User(); //object copy
  }

  ngOnInit(): void {

  }

  onSubmitTemplateBased() {
    console.log(this.user);
    this.isEdit ? this.editCurrentUser() : this.addNewUser();

  }

  editCurrentUser(){
    this.service.editUser(this.data).subscribe((data:any)=>{
      this.OKSnackBar()
    })
  }

  addNewUser(): void {
    this.service.addUser(this.user).subscribe((data: any) => {
      this.OKSnackBar();
      this.closeDialog();


    }, error => {

      this.errorSnackBar()
    }
    );
  }
  closeDialog() {
    this.dialogRef.close();
  }
  OKSnackBar() {
    this.snackBar.open("You successfully added new user", "Ok", {
      panelClass: ['OKSnackBar'], duration: 5000
    })
  }
  //pokusaj da ga pozoves kad se ne unese nista
  errorSnackBar() {
    this.snackBar.open("Something went wrong", "Ok", {
      duration: 5000, panelClass: ['greskaSnackBar']
    });

  }



}
