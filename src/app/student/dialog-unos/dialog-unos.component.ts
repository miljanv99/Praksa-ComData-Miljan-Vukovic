import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-dialog-unos',
  templateUrl: './dialog-unos.component.html',
  styleUrls: ['./dialog-unos.component.css']
})
export class DialogUnosComponent implements OnInit {
  student = new Student;
  constructor(private snackBar:MatSnackBar) { }
  
  ngOnInit(): void {
    
  }

  onSubmitTemplateBased(){
    console.log(this.student);
    
  }  
//pokusaj da ga pozoves kad se ne unese nista
  errorSnackBar(){
    this.snackBar.open("Doslo je do greske","Ok",{
      panelClass:['greskaSnackBar']
    });
    
  }


}
