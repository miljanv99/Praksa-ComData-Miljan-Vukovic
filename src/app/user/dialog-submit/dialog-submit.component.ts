import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserDataResponse } from 'src/app/models/user-data-response.model';
import { User } from 'src/app/models/user.model';
import { ServiceDataService } from 'src/app/service/service-data.service';
import { UserComponent } from '../user.component';

@Component({
  selector: 'app-dialog-submit',
  templateUrl: './dialog-submit.component.html',
  styleUrls: ['./dialog-submit.component.css']
})
export class DialogSubmitComponent {
  user: User;
  isEdit: boolean;

  constructor(private snackBar: MatSnackBar,
    private service: ServiceDataService,
    private dialogRef: MatDialogRef<UserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {
    this.isEdit = data ? true : false;
    this.user = data ? Object.assign({}, data) : new User(); //object copy
  }

  onSubmitTemplateBased() {
    this.isEdit ? this.editCurrentUser() : this.addNewUser();
  }

  okSnackBar() {
    this.snackBar.open("You successfully added new user", "Ok", {
      panelClass: ['OKSnackBar'], duration: 5000
    })
  }

  okEditSnackBar() {
    this.snackBar.open("You successfully change user`s data with ID: " + this.user.id, "Ok", {
      panelClass: ['OKSnackBar'], duration: 5000
    })
  }

  //pokusaj da ga pozoves kad se ne unese nista
  errorSnackBar() {
    this.snackBar.open("Something went wrong", "Ok", {
      duration: 5000, panelClass: ['greskaSnackBar']
    });
  }

  private addNewUser(): void {
    this.service.addUser(this.user).subscribe((data: UserDataResponse) => {
      this.dialogRef.close(this.user);
      this.okSnackBar();
    }, error => {
      this.errorSnackBar()
    });
  }

  private editCurrentUser() {
    this.service.editUser(this.user).subscribe((data: UserDataResponse) => {
      this.dialogRef.close(this.user);
      this.okEditSnackBar();
    }, error => {
      this.errorSnackBar()
    });
  }

}
