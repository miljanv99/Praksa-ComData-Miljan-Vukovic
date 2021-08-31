import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user.model';
import { ServiceDataService } from 'src/app/service/service-data.service';
import { UserComponent } from '../user.component';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {
  constructor(private service: ServiceDataService, 
              @Inject(MAT_DIALOG_DATA) public data: User,
              private dialogRef:MatDialogRef<UserComponent>,
              private snackBar: MatSnackBar ) { }
  
  ngOnInit(): void {
  }
 
  onDeleteUser(){
    this.service.deleteUser(this.data.id).subscribe((data:any)=>{
      this.dialogRef.close(this.data);//prosledjuje se obrisani user, 
      //moze se proslediti i samo user pa da se brisanje vrsi u roditeljskoj komponenti
      this.OKSnackBar();
    }, error=>{
      this.errorSnackBar();
    });
  }

  OKSnackBar() {
    this.snackBar.open("You successfully deleted "+this.data.name , "Ok", {
      panelClass: ['OKSnackBar'], duration: 5000
    })
  }
  errorSnackBar() {
    this.snackBar.open("Something went wrong", "Ok", {
      duration: 5000, panelClass: ['greskaSnackBar']
    });

  }
  

}
