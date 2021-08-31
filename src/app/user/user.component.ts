import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogSubmitComponent } from './dialog-submit/dialog-submit.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  constructor(private snackBar : MatSnackBar,
              private dialogSubmit: MatDialog) {

  }

  ngOnInit(): void {
   this.loadSnackBar();
  }

  loadSnackBar(){
    this.snackBar.open('Welcome :D', 'Ok', {
      duration: 3500, panelClass: ['snackBarDobroDosao']
    });
  }

  
  openDialogSubmit(){
    this.dialogSubmit.open(DialogSubmitComponent,{
      width:"500px",
      height:"450px"
    })

  }
  


  

}




